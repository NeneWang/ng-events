import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtshowService } from 'src/app/services/artshow.service';
import { AuthService } from 'src/app/services/auth.service';

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
    significant_views: 120,
    projects: [],
    is_participant: false,
    submitted_count: 0

  }

  event_slug: string;
  user_email: string;
  is_participant = false;

  constructor(private route: ActivatedRoute, private artshowService: ArtshowService, private authService: AuthService) {
    this.event_slug = this.route.snapshot.params['slug']
    this.user_email = this.authService.getUserEmail() ?? '';
    if (this.authService.getUserEmail() == null) {
      // this.authService.login();
      return
    }
    const eventData = this.artshowService.getEventDetails(this.event_slug, this.user_email);

    eventData.subscribe((data: { title: string; description: string; date: string; location: string; image: string; tags: string[]; creator: string; creator_slug: string; significant_views: number; projects: [], 
      is_participant: boolean, submitted_count: number
     }) => {
      this.event_data = data;
      console.log('Event data', this.event_data);
      this.is_participant = this.event_data.is_participant;

    });
  }
  
  togglejoinEvent(): void {
    const useremail = this.authService.getUserEmail();
    const event_slug = this.event_slug;
    
    this.event_data.is_participant = !this.event_data.is_participant;
    if (useremail == null || useremail == '') {
      return
    }
    // this.event_data.is_participant = !this.event_data.is_participant;
    this.is_participant = !this.is_participant;
    this.artshowService.toggleJoinEvent(event_slug, useremail).subscribe({
      next: (response) => {
        console.log('Join Event successful', response);
      },
      error: (err) => {
        console.error('Error joining event', err);
      },
    });
  }

  // onsubmitWork(): void {
    
  // }


}
