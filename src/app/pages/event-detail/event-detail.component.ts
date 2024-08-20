import { Component } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {
  event_data = {
    title: 'Abstract Art',
    description: 'A showcase of abstract art from around the world.',
    date: '2024-02-05',
    location: 'New York, NY',
    image: 'https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png',
    tags: ['Art', 'Abstract', 'Exhibition'],
    creator: 'Creator A',
    creator_slug: 'creator-a',
    significant_views: 120
  
  }
}
