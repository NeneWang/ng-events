import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-screen',
  templateUrl: './browse-screen.component.html',
  styleUrls: ['./browse-screen.component.scss']
})
export class BrowseScreenComponent implements OnInit {
  items = [
    { title: 'Event 1', creator: 'Creator A' },
    { title: 'Event 2', creator: 'Creator B' },
    { title: 'Vlog 1', creator: 'Creator C' },
    { title: 'Shrine 1', creator: 'Creator D' },
    { title: 'Shrine 2', creator: 'Creator E' },
  ];

  filteredItems = this.items;
  searchTerm = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.filterItems(this.searchTerm);
      }
    });
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

  
}
