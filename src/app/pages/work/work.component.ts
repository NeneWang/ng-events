import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  work: any;
  isFavorited = false;
  user_email: string | undefined;
  slug: string;
  edit_work = false;
  is_author = false;


  constructor(private route: ActivatedRoute, private router: Router, private artshowService: ArtshowService, private AuthService: AuthService, private activatedRoute: ActivatedRoute) {
    this.user_email = this.AuthService.getUserEmail();
    this.slug = route.snapshot.params['slug'];

    const workData = this.artshowService.getArtwork(this.slug, this.user_email);
    workData.subscribe((data) => {
      this.work = data;
      console.log('Work data', this.work);
      this.isFavorited = this.work?.favorite ?? false;
      this.is_author = this.work?.is_author ?? false;

    });

  }


  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.panelClass = ['custom-snackbar'];

    this._snackBar.open(message, action, config);
  }


  favoriteWork(): void {
    const useremail = this.AuthService.getUserEmail();
    const artwork_slug = this.work.slug;

    this.isFavorited = !this.isFavorited;
    this.artshowService.toggleFavorite(artwork_slug, useremail ?? '').subscribe({
      next: () => {
        // console.log('Favorite successful', response);
        this.openSnackBar('Favorite successful', 'close')
      },
      error: () => {
        // console.error('Error favoriting work', err);
        this.openSnackBar('Error favoriting work', 'close')
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
      next: () => {
        this._snackBar.open('Deleted successfully', 'close')
        this.router.navigate(['/profile'])
      }
    });
  }


  saveUpdates(): void {

    this.artshowService.saveWorkUpdates(this.slug, this.work).subscribe(
      {
        next: () => {
          console.log('update success.')
        }
      }
    )


  }

}
