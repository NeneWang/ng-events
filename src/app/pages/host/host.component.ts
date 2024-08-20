import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { ArtshowService } from 'src/app/services/artshow.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
})
export class HostComponent {
  private _snackBar = inject(MatSnackBar);
  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadMessage = '';
  image_link = '';

  showOtherField = false;
  http: any;
  account_email = '';
  upload_succeeded = false;

  post_file_url = environment.baseUrl + '/upload';

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    mediums: this.fb.group({
      showcase: [false],
      competition: [false],
      gallery: [false],
      performance: [false],
      workshop: [false],
      panel: [false],
      other: [false],
    }),
    otherMedium: [''],
    poster_link: [''],
    
    
    start_date: [new Date().toISOString(), Validators.required],
    end_date: [new Date().toISOString(), Validators.required],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private artshowService: ArtshowService
  ) {
    if (!this.authService.isAuthenticatedUser()) {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    } else {
      this.account_email = localStorage.getItem('email')!;
    }
  }

  ngOnInit(): void {
    this.form.get('mediums.other')?.valueChanges.subscribe((value) => {
      this.showOtherField = value;
      if (!value) {
        this.form.get('otherMedium')?.reset();
      }
    });
  }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', this.post_file_url, formData, {
      reportProgress: true,
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return {
              status: 'progress',
              message: Math.round((100 * event.loaded) / event.total!),
            };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass = ['custom-snackbar'];

    this._snackBar.open(message, action, config);
  }

  resetForm(): void {
    this.form.reset();
    this.removeUpload();
    this.upload_succeeded = false;
  }

  onOtherChange(event: any): void {
    this.showOtherField = event.checked;
    if (!event.checked) {
      this.form.get('otherMedium')?.reset();
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  submit(): void {
    if (this.form.valid) {
      const submissionContent = this.form.value;
      submissionContent.account_email =
        localStorage.getItem('email') || '';

      const submissionData = {
        title: submissionContent.title,
        creator: this.account_email,
        creator_slug: this.account_email,
        image: this.image_link,
        tags: [],
        description: submissionContent.description,
        date: submissionContent.start_date,
        significant_views: 0,
        start_date: submissionContent.start_date,
        end_date: submissionContent.end_date,
        additional_url: submissionContent.poster_link,
      };

      console.log('submission data', submissionData);

      this.artshowService.createEvent(submissionData).subscribe({
        next: (response) => {
          console.log('Artwork published', response);
          this.upload_succeeded = true;
          this.openSnackBar('Event published', 'Close');
        },
        error: (error) => {
          console.error('Artwork publish error', error);
          this.openSnackBar('Error publishing event', 'Close');
        },
      });
    } else {
      console.log('Form is invalid', this.form);
      this.openSnackBar('Form is invalid', 'Close');
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.artshowService.upload(this.selectedFile).subscribe(
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else {
            this.uploadMessage = event.filename
              ? `File uploaded: ${event.filename}`
              : 'Upload complete';
            if (event.url && event.url.length > 1) {
              
              this.image_link = event.url;
            }
          }
        },
        (error: any) => {
          this.uploadMessage = 'File upload failed!';
          console.error(error);
        }
      );
    }
  }

  removeUpload(): void {
    this.selectedFile = null;
    this.uploadProgress = 0;
    this.uploadMessage = '';
    this.image_link = '';
  }
}
