import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { ArtshowService } from 'src/app/services/artshow.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-publish-artwork',
  templateUrl: './publish-artwork.component.html',
  styleUrls: ['./publish-artwork.component.scss']
})
export class PublishArtworkComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadMessage = '';
  submission_link = '';
  event_id = 0;

  showOtherField = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  http: any;
  account_email = "";
  post_file_url = environment.baseUrl + '/upload';
  upload_succeeded = false;


  form: FormGroup = this.fb.group({
    titleOfWork: ['', Validators.required],
    mediums: this.fb.group({
      Photography: [false],
      Painting: [false],
      MixedMedia: [false],
      Print: [false],
      Drawing: [false],
      DigitalMedia: [false],
      Film: [false],
      Literary: [false],
      Music: [false],
      Other: [false],
    }),
    otherMedium: [''],
    artistStatement: ['', Validators.required],
    submission_link: ['']
  });

  // If not user logged in, redirect to login page
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private artshowService: ArtshowService, private activatedRoute: ActivatedRoute) {
    if (!this.authService.isAuthenticatedUser()) {
      this.authService.logout();
      // Redirect
      this.router.navigate(['/auth/login']);
      
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.account_email = localStorage.getItem('email')!;
    }
    // Try convert it into a number
    try{
      this.event_id = parseInt(this.activatedRoute.snapshot.params['slug']);
    }
    catch (e) {
      this.event_id = this.activatedRoute.snapshot.params['slug'];
    }
    // console.log('Event ID', this.event_id);
  }

  ngOnInit(): void {
    // this.form = 

    this.form.get('mediums.Other')?.valueChanges.subscribe(value => {
      this.showOtherField = value;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', this.post_file_url, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return { status: 'progress', message: Math.round((100 * event.loaded) / event.total!) };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onOtherChange(event: any): void {
    this.showOtherField = event.checked;
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.onUpload()
  }


  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass = ['custom-snackbar'];

    this._snackBar.open(message, action, config);
  }

  submit(): void {
    if (this.form.valid) {
      // console.log("Submitting the form:")
      // console.log(this.form.value);
      const submissionContent = this.form.value;
      submissionContent.event_id = this.event_id ?? 0;
      submissionContent.account_email = localStorage.getItem('email') || '';
      // console.log("whats going on with the submission link?", this.form.value);


      this.artshowService.publishArtwork(submissionContent).subscribe({
        next: (response) => {
          console.log('Artwork published', response);
          // this.router.navigate(['/']);
          this.upload_succeeded = true;
          this.openSnackBar("Artwork Published", 'Close')
        },
        error: (error) => {
          console.error('Artwork publish error', error);
          this.openSnackBar("Error publishing artwork", 'Close')
        }
      });
    }else{
      this.openSnackBar("Form is Invalid", 'Close')
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.artshowService.upload(this.selectedFile).subscribe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else {
            this.uploadMessage = event.filename ? `File uploaded: ${event.filename}` : 'Upload complete';
            if (event.url && event.url.length > 1) {
              // this.form.submission_link = event.url;
              // console.log("Setting submission link to", event.url, 'from', this.form.get('submission_link')?.value);
              this.form.patchValue({
                submission_link: event.url
              });
              this.submission_link = event.url;
            }
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any) => {
          this.uploadMessage = 'File upload failed!';
          console.error(error);
        }
      );
    }
  }
}
