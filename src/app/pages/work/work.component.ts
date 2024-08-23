import { AuthService } from './../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtshowService } from 'src/app/services/artshow.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  private _snackBar = inject(MatSnackBar);
  work: any;
  isFavorited = false;
  user_email: string | undefined;
  slug: string;
  edit_work = false;


  constructor(private route: ActivatedRoute, private router: Router, private artshowService: ArtshowService, private AuthService: AuthService) {
    this.user_email = this.AuthService.getUserEmail();
    this.slug = route.snapshot.params['slug'];

    const workData = this.artshowService.getArtwork(this.slug, this.user_email);
    workData.subscribe((data) => {
      this.work = data;
      console.log('Work data', this.work);
      this.isFavorited = this.work?.favorite ?? false;

    });

  }


  favoriteWork(): void {
    const useremail = this.AuthService.getUserEmail();
    const artwork_slug = this.work.slug;

    this.isFavorited = !this.isFavorited;
    this.artshowService.toggleFavorite(artwork_slug, useremail ?? '').subscribe({
      next: (response) => {
        // console.log('Favorite successful', response);
      },
      error: (err) => {
        // console.error('Error favoriting work', err);
      },
    });

  }


  toggleEdit(): void {
    this.edit_work = !this.edit_work;
    if (!this.edit_work) {
      // Going back to positive main menu then save any changes.
      this.saveUpdates()
    }
  }

  onDelete(): void {
    this.artshowService.deleteWorkBySlug(this.slug).subscribe({
      next: (response) => {
        this._snackBar.open('Deleted successfully', 'close')
        this.router.navigate(['/profile'])
      }
    });
  }


  saveUpdates(): void {

    this.artshowService.saveWorkUpdates(this.slug, this.work).subscribe(
      {
        next: (_) => {
          console.log('update success.')
        }
      }
    )


  }

}
