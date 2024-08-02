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
      "title": "Behind the Scenes 1",
      "creator": "Creator B",
      "creator_slug": "creator-b",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "behind-the-scenes"],
      "description": "Take a peek behind the scenes of our latest project! See the process, the challenges, and the fun moments we experienced while bringing this project to life. From brainstorming sessions to final touches, join us on this exciting journey.",
      "date": "2024-05-10",
      "significant_views": 120
    },
    {
      "title": "Development Update",
      "creator": "Dev C",
      "creator_slug": "dev-c",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "development"],
      "description": "In this development update, we discuss the progress made on our latest software release. We cover new features, improvements, and what's next on our roadmap. Stay tuned for more updates as we continue to innovate and improve.",
      "date": "2024-06-14",
      "significant_views": 98
    },
    {
      "title": "Vlog 2",
      "creator": "Creator D",
      "creator_slug": "creator-d",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "shrine"],
      "description": "Welcome to another vlog! Today, we're exploring a beautiful shrine and sharing the history and significance of this sacred place. Join us as we delve into the cultural and spiritual aspects that make this shrine a must-visit destination.",
      "date": "2024-07-01",
      "significant_views": 134
    },
    {
      "title": "Project Insights",
      "creator": "Creator E",
      "creator_slug": "creator-e",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "development"],
      "description": "Get insights into our latest project from the perspective of the development team. Learn about the creative process, the technical challenges, and the breakthroughs that have shaped the project so far.",
      "date": "2024-07-22",
      "significant_views": 145
    },
    {
      "title": "Behind the Scenes 2",
      "creator": "Creator F",
      "creator_slug": "creator-f",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "behind-the-scenes"],
      "description": "Join us for another behind-the-scenes look at our creative process. See how we turn ideas into reality, the teamwork involved, and the fun moments that make it all worthwhile.",
      "date": "2024-08-05",
      "significant_views": 167
    },
    {
      "title": "Development Diary",
      "creator": "Dev G",
      "creator_slug": "dev-g",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "development"],
      "description": "Welcome to our development diary series. In this episode, we share our progress on the latest build, discuss the new features, and talk about the user feedback we've received so far. Your input is invaluable to us!",
      "date": "2024-08-18",
      "significant_views": 105
    },
    {
      "title": "Vlog 3",
      "creator": "Creator H",
      "creator_slug": "creator-h",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "shrine"],
      "description": "In this vlog, we're visiting another shrine and exploring its unique features and history. We'll also share some personal reflections and experiences from our visit. Join us for this serene and inspiring journey.",
      "date": "2024-09-03",
      "significant_views": 112
    }
  ]


  items_filtered = this.items_initial;


}
