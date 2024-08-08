import { Component } from '@angular/core';
import { ArtshowService } from 'src/app/services/artshow.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadMessage = '';

  constructor(private artshowService: ArtshowService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.artshowService.upload(this.selectedFile).subscribe(
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else {
            this.uploadMessage = event.filename ? `File uploaded: ${event.filename}` : 'Upload complete';
            if(event.url){
              this.uploadMessage += `| url ` + event.url
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
