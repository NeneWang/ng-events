import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-screen',
  templateUrl: './explore-screen.component.html',
  styleUrls: ['./explore-screen.component.scss']
})
export class ExploreScreenComponent {

  tags_initial = ['event', 'music'];
  initial_items = [
    {
      title: 'Event 1', creator: 'Creator A', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event', 'music'],
      description: "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music"
    },
    {
      title: 'Event 2', creator: 'Creator B', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event', 'music'],
      description: "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music"
    },
    {
      title: 'Vlog 1', creator: 'Creator C', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['music'],
      description: "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music"
    },
  ]

  favoritedArtistItems = [
    {
      title: 'Shrine 1', creator: 'Creator D', image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png', tags: ['event'],
      description: "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music"
    }
  ]

  searchTags(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const tags = inputElement.value;
    console.log(tags);
  }
}
