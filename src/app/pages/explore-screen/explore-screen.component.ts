import { Component, OnInit } from '@angular/core';
import { ArtshowService } from 'src/app/services/artshow.service';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-explore-screen',
  templateUrl: './explore-screen.component.html',
  styleUrls: ['./explore-screen.component.scss']
})
export class ExploreScreenComponent implements OnInit {

  tags_initial = ['event', 'music'];
  initial_items = []
  favoritedArtistItems = []
  user_email = ""



  constructor(private artshowService: ArtshowService, private cdr: ChangeDetectorRef, private AuthService: AuthService) {

    const exploreArtwork = this.artshowService.getExploreArtworks();
    exploreArtwork.subscribe((data) => {
      
      this.initial_items = data;
      this.cdr.detectChanges(); // Force change detection
    });

    this.user_email = this.AuthService.getUserEmail() || '';

  }

  ngOnInit(): void {
    const exploreArtwork = this.artshowService.getExploreArtworks();
    const favoritedArtwork = this.artshowService.getFavoritedArtworks(this.user_email);
    exploreArtwork.subscribe((data) => {
      this.initial_items = data;
      this.cdr.detectChanges(); // Force change detection
    });

    favoritedArtwork.subscribe((data) => {
      this.favoritedArtistItems = data;
      this.cdr.detectChanges(); // Force change detection
    });
  }



  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const tags = inputElement.value;


    console.log(tags);
  }
}
