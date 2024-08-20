import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss']
})
export class ProfileScreenComponent {

  profile = {
    username: 'toriyaki-honmyo',
    name: 'Toriyaki Honmyo',
    description: 'Is not easy to communicate with others, but his love of drawing many lines and faces is increasing, to create a unique view of the world.',
    social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/toriyaki-honmyo/' },
      { name: 'Facebook', url: 'https://www.facebook.com/toriyaki.honmyo' },
      { name: 'Twitter', url: 'https://twitter.com/toriyaki_honmyo' }
    ],
    tags: ['Game Developer', '3D Artist', 'Patron'],
    projects: [
      {
        title: "Behind the Scenes 1",
        slug: 'behind-the-scenes',
        creator: "Creator B",
        creator_slug: "toriyaki-honmyo",
        image: "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
        tags: ["vlog", "behind-the-scenes"],
        description: "Take a peek behind the scenes of our latest project! See the process, the challenges, and the fun moments we experienced while bringing this project to life. From brainstorming sessions to final touches, join us on this exciting journey.",
        date: "2024-05-10",
        significant_views: 120
      },
      {
        title: "Development Update",
        slug: 'development-update',
        creator: "Dev C",
        creator_slug: "toriyaki-honmyo",
        image: "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
        tags: ["vlog", "development"],
        description: "In this development update, we discuss the progress made on our latest software release. We cover new features, improvements, and what's next on our roadmap. Stay tuned for more updates as we continue to innovate and improve.",
        date: "2024-06-14",
        significant_views: 98
      },
    ]
  };

  constructor( private route: ActivatedRoute
  ){}


}
