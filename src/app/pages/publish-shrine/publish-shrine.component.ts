import { ArtshowService } from 'src/app/services/artshow.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-publish-shrine',
  templateUrl: './publish-shrine.component.html',
  styleUrls: ['./publish-shrine.component.scss']
})
export class PublishShrineComponent {
  upload_succeeded = false;

  constructor(private fb: FormBuilder, private artshowService: ArtshowService, private authService: AuthService ) {}

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    root_link: ['', Validators.required],
  });

  submit(): void {
    if (this.form.valid) {
      // this.upload_succeeded = true;
      const submissionContent = this.form.value;
      submissionContent['user_email'] = this.authService.getUserEmail() as string;
      this.artshowService.publishShrine(submissionContent).subscribe(
        (response) => {
          console.log('Shrine published', response);
          this.upload_succeeded = true;
        },
        (error) => {
          console.error('Error publishing shrine', error);
        }
      );

    }
  }
}
