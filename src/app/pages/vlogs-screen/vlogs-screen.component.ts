import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vlogs-screen',
  templateUrl: './vlogs-screen.component.html',
  styleUrls: ['./vlogs-screen.component.scss']
})
export class VlogsScreenComponent {

  tags_initial = [
    'vlog', 'development', 'behind-the-scenes', 'shrine'
  ]

  items_initial = [
    {
      title: "Vlog 1",
      creator: "Creator A",
      image: "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      tags: ["vlog", "development"],
      description: "Greetings and salutations! It is time for the third installment of POTBRR Devlogs! We’re happy to report that we’ve reached over 6,000 downloads of Act 1! Thank you all so much for your support! We’re hard at work on Act 2, and we’re excited to share some of our progress with you. We’ve been working on a lot of new features, including new characters, new locations, and new music"
    }
  ]
  items_filtered = this.items_initial;


}
