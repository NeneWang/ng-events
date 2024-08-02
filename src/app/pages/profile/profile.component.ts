import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  profiles = [
    {
      username: 'toriyaki-honmyo',
      name: 'Toriyaki Honmyo',
      description: 'Is not easy to communicate with others, but his love of drawing many lines and faces is increasing, to create a unique view of the world.',
      social: ['LinkedIn', 'Facebook', 'Twitter'],
      tags: ['Game Developer', '3D Artist', 'Patron'],
      projects: [
        
        {
          "title": "Behind the Scenes 1",
          "creator": "Creator B",
          "creator_slug": "toriyaki-honmyo",
          "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
          "tags": ["vlog", "behind-the-scenes"],
          "description": "Take a peek behind the scenes of our latest project! See the process, the challenges, and the fun moments we experienced while bringing this project to life. From brainstorming sessions to final touches, join us on this exciting journey.",
          "date": "2024-05-10",
          "significant_views": 120
        },
        {
          "title": "Development Update",
          "creator": "Dev C",
          "creator_slug": "toriyaki-honmyo",
          "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
          "tags": ["vlog", "development"],
          "description": "In this development update, we discuss the progress made on our latest software release. We cover new features, improvements, and what's next on our roadmap. Stay tuned for more updates as we continue to innovate and improve.",
          "date": "2024-06-14",
          "significant_views": 98
        },
      ]
    },
    // Add more profiles as needed
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const username = this.route.snapshot.paramMap.get('username');
    // this.profile = this.profiles.find(p => p.username === username);
    this.profile = this.profiles[0]; // For demo purposes
  }
}
