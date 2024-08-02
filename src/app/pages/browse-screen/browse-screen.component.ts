import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-screen',
  templateUrl: './browse-screen.component.html',
  styleUrls: ['./browse-screen.component.scss']
})
export class BrowseScreenComponent implements OnInit {
  initial_items = [
    {
      "title": "Event 1",
      "creator": "Creator A",
      "creator_slug": "creator-a",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["event", "music"],
      "description": "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music.",
      "date": "2024-03-01",
      "significant_views": 145
    },
    {
      "title": "Event 2",
      "creator": "Creator B",
      "creator_slug": "creator-b",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["event", "music"],
      "description": "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music.",
      "date": "2024-04-10",
      "significant_views": 172
    },
    {
      "title": "Vlog 1",
      "creator": "Creator C",
      "creator_slug": "creator-c",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["music"],
      "description": "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music.",
      "date": "2024-05-05",
      "significant_views": 198
    }
  ];

  tags_initial = ['event', 'music'];
  selectedTags: string[] = [];

  tags = this.tags_initial;

  filteredItems = this.initial_items;
  searchTerm = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.filterItems(this.searchTerm);
      } else {
        this.filteredItems = this.initial_items;
      }

    });
  }


  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const tagsSearch = inputElement.value;
    // Filter tags
    if (tagsSearch === '') {
      this.tags = this.tags_initial;
      return;
    }
    this.tags = this.tags.filter(tag =>
      tag.toLowerCase().includes(tagsSearch.toLowerCase())
    );
  }


  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value.toLowerCase();
    this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm: string): void {
    if (searchTerm === '') {
      this.filteredItems = this.initial_items;
      return;
    }
    this.filteredItems = this.initial_items.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.creator.toLowerCase().includes(searchTerm)
    );
  }


}
