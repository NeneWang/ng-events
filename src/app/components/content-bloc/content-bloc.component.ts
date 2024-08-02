import { Component, Input } from '@angular/core';

interface Item {
  title: string;
  creator: string;
  image: string;
  tags: string[];
  description: string;
  date: string;
  significant_views: number;
  creator_slug: string;
}


@Component({
  selector: 'app-content-bloc',
  templateUrl: './content-bloc.component.html',
  styleUrls: ['./content-bloc.component.scss']
})



export class ContentBlocComponent {
  @Input() initialItems: Item[] = [];
  @Input() initialTags: string[] = [];

  selectedTags: string[] = [];
  filteredTags: string[] = [];
  filteredItems: Item[] = [];

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.filteredItems = this.initialItems;
    this.filteredTags = this.initialTags;
  }

  toggleTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);
    }
    this.filterByTags();
  }

  filterByTags(): void {
    if (this.selectedTags.length === 0) {
      this.filteredItems = this.initialItems;
    } else {
      this.filteredItems = this.initialItems.filter(item =>
        item.tags.some((tag: string) => this.selectedTags.includes(tag))
      );
    }
  }

  onTagKeydown(event: KeyboardEvent, tag: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleTag(tag);
    }
  }

  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value.toLowerCase();

    if (searchTerm === '') {
      this.filteredTags = this.initialTags;
      return;
    }
    this.filteredTags = this.initialTags.filter(tag =>
      tag.toLowerCase().includes(searchTerm)
    );

  }
}
