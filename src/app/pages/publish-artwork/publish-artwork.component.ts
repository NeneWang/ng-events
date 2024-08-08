import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { ArtshowService } from 'src/app/services/artshow.service';


@Component({
  selector: 'app-publish-artwork',
  templateUrl: './publish-artwork.component.html',
  styleUrls: ['./publish-artwork.component.scss']
})
export class PublishArtworkComponent implements OnInit {

  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadMessage = '';
  submission_link = '';


  form: FormGroup = this.fb.group({
    titleOfWork: [''],
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
    artistStatement: [''],
    submission_link: ['']
  });

  showOtherField = false;
  http: any;
  account_email = "";
  post_file_url = environment.baseUrl + '/upload';

  // If not user logged in, redirect to login page
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private artshowService: ArtshowService) {
    if (!this.authService.isAuthenticatedUser()) {
      this.authService.logout();
      // Redirect
      this.router.navigate(['/auth/login']);
    }else{
      this.account_email = localStorage.getItem('email')!;
    }
  }

  ngOnInit(): void {
    // this.form = 

    this.form.get('mediums.Other')?.valueChanges.subscribe(value => {
      this.showOtherField = value;
    });
  }


  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', this.post_file_url, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return { status: 'progress', message: Math.round((100 * event.loaded) / event.total!) };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  onOtherChange(event: any): void {
    this.showOtherField = event.checked;
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submit(): void{
    if(this.form.valid){
      // console.log("Submitting the form:")
      // console.log(this.form.value);
      const submissionContent = this.form.value;
      submissionContent.account_email = localStorage.getItem('email') || '';
      this.artshowService.publishArtwork(submissionContent).subscribe({
        next: (response) => {
          console.log('Artwork published', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Artwork publish error', error);
        }
      });
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.artshowService.upload(this.selectedFile).subscribe(
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else {
            this.uploadMessage = event.filename ? `File uploaded: ${event.filename}` : 'Upload complete';
            if (event.url){
              // this.form.submission_link = event.url;
              this.form.patchValue({
                submission_link: event.url
              });
              this.submission_link = event.url;
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
}
