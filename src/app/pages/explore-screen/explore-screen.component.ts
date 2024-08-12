import { Component, OnInit } from '@angular/core';
import { ArtshowService } from 'src/app/services/artshow.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-explore-screen',
  templateUrl: './explore-screen.component.html',
  styleUrls: ['./explore-screen.component.scss']
})
export class ExploreScreenComponent implements OnInit {

  tags_initial = ['event', 'music'];
  initial_items = []

  favoritedArtistItems = [
    {
      "title": "Shrine 1",
      "slug": "shrine-1",
      "creator": "Creator D",
      "creator_slug": "creator-d",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["event"],
      "description": "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music.",
      "date": "2024-06-12",
      "significant_views": 134
    }
  ]


  constructor(private artshowService: ArtshowService, private cdr: ChangeDetectorRef) {

    const exploreArtwork = this.artshowService.getExploreArtworks();
    exploreArtwork.subscribe((data) => {
      
      this.initial_items = data;
      this.cdr.detectChanges(); // Force change detection
    });

  }

  ngOnInit(): void {
    const exploreArtwork = this.artshowService.getExploreArtworks();
    exploreArtwork.subscribe((data) => {
      this.initial_items = data;
      this.cdr.detectChanges(); // Force change detection
    });
  }



  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const tags = inputElement.value;


    console.log(tags);
  }
}
