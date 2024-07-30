import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-screen',
  templateUrl: './explore-screen.component.html',
  styleUrls: ['./explore-screen.component.scss']
})
export class ExploreScreenComponent {

  tags = ['event', 'music'];

    searchTags(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const tags = inputElement.value;
        console.log(tags);
    }
}
