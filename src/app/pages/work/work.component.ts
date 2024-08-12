import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtshowService } from 'src/app/services/artshow.service';



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  work: any;
  isFavorited = false;
  user_email: string | undefined;

  constructor(private route: ActivatedRoute, private artshowService: ArtshowService, private AuthService: AuthService) {
    this.user_email = this.AuthService.getUserEmail();
    const workData = this.artshowService.getArtwork(this.route.snapshot.params['slug'], this.user_email);
    workData.subscribe((data) => {
      this.work = data;
      console.log('Work data', this.work);
      this.isFavorited = this.work?.favorite?? false;

    });

  }


  favoriteWork(): void {
    const useremail = this.AuthService.getUserEmail();
    const artwork_slug = this.work.slug;

    this.isFavorited = !this.isFavorited;
    this.artshowService.toggleFavorite(artwork_slug, useremail?? '').subscribe({
      next: (response) => {
        // console.log('Favorite successful', response);
      },
      error: (err) => {
        // console.error('Error favoriting work', err);
      },
    });

  }

}
