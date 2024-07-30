import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-screen',
  templateUrl: './browse-screen.component.html',
  styleUrls: ['./browse-screen.component.scss']
})
export class BrowseScreenComponent implements OnInit {
  items = [
    { title: 'Event 1', creator: 'Creator A', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event', 'music'] },
    { title: 'Event 2', creator: 'Creator B', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event', 'music'] },
    { title: 'Vlog 1', creator: 'Creator C', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['music'] },
    { title: 'Shrine 1', creator: 'Creator D', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event'] },
    { title: 'Shrine 2', creator: 'Creator E', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event'] },
  ];

  selectedTags: string[] = [];

  tags_initial = ['event', 'music'];
  tags = this.tags_initial;

  filteredItems = this.items;
  searchTerm = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.filterItems(this.searchTerm);
      }
    });
  }


  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const tagsSearch = inputElement.value;
    // Filter tags
    if(tagsSearch === ''){
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
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.creator.toLowerCase().includes(searchTerm)
    );
  }

  toggleTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);
    }
    this.filterByTags(this.selectedTags);
  }

  filterByTags(tags: string[]): void {
    if (tags.length === 0) {
      this.filteredItems = this.items;
      return;
    }
    this.filteredItems = this.items.filter(item =>
      item.tags.some(tag => tags.includes(tag))
    );
  }


  onTagKeydown(event: KeyboardEvent, tag: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleTag(tag);
    }
  }


}
