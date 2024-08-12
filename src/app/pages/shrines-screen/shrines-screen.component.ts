import { Component } from '@angular/core';

@Component({
  selector: 'app-shrines-screen',
  templateUrl: './shrines-screen.component.html',
  styleUrls: ['./shrines-screen.component.scss']
})
export class ShrinesScreenComponent {
  tags_initial = [
    'portfolio', 'fanart', 'tutorial', 'narratives'
  ]

  items_initial = [
    {
      "title": "Cooking Masterclass",
      "slug": "cooking-masterclass",
      "creator": "Chef E",
      "creator_slug": "chef-e",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["cooking", "tutorial"],
      "description": "Join my cooking masterclass where I teach you the secrets to making gourmet dishes at home. From appetizers to desserts, learn step-by-step how to create culinary masterpieces.",
      "date": "2024-02-15",
      "significant_views": 152
    },
    {
      "title": "Digital Art Showcase",
      "slug": "digital-art-showcase",
      "creator": "Artist F",
      "creator_slug": "artist-f",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["portfolio", "digital art"],
      "description": "Explore my digital art showcase featuring a collection of my latest works. From vibrant landscapes to intricate character designs, each piece showcases my passion for digital art.",
      "date": "2024-03-22",
      "significant_views": 198
    },
    {
      "title": "Travel Vlogs",
      "slug": "travel-vlogs",
      "creator": "Traveler G",
      "creator_slug": "traveler-g",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["vlog", "travel"],
      "description": "Follow my adventures around the world through my travel vlogs. Discover new destinations, cultures, and experiences as I take you along on my journeys.",
      "date": "2024-04-10",
      "significant_views": 214
    },
    {
      "title": "Science Experiments",
      "slug": "science-experiments",
      "creator": "Scientist H",
      "creator_slug": "scientist-h",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["tutorial", "science"],
      "description": "Join me as I conduct exciting science experiments that you can try at home. From chemistry to physics, learn about the wonders of science through hands-on activities.",
      "date": "2024-05-05",
      "significant_views": 176
    },
    {
      "title": "Fantasy Illustrations",
      "slug": "fantasy-illustrations",
      "creator": "Artist I",
      "creator_slug": "artist-i",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["portfolio", "fanart"],
      "description": "Dive into my fantasy illustrations featuring mythical creatures, enchanted landscapes, and epic heroes. Each piece is a glimpse into my imagination and artistic journey.",
      "date": "2024-05-20",
      "significant_views": 189
    },
    {
      "title": "Personal Growth Blog",
      "slug": "personal-growth-blog",
      "creator": "Author J",
      "creator_slug": "author-j",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["narratives", "personal growth"],
      "description": "Read my personal growth blog where I share my experiences and insights on self-improvement, mindfulness, and achieving your goals. Join me on the path to becoming the best version of yourself.",
      "date": "2024-06-12",
      "significant_views": 205
    },
    {
      "title": "Tech Reviews",
      "slug": "tech-reviews",
      "creator": "Reviewer K",
      "creator_slug": "reviewer-k",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["review", "technology"],
      "description": "Stay up-to-date with the latest in tech through my in-depth reviews. From gadgets to software, get my honest opinions and detailed analyses to help you make informed decisions.",
      "date": "2024-07-02",
      "significant_views": 230
    },
    {
      "title": "Music Production Tips",
      "slug": "music-production-tips",
      "creator": "Producer L",
      "creator_slug": "producer-l",
      "image": "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/1346/Cube__PSF_.png",
      "tags": ["tutorial", "music"],
      "description": "Learn the art of music production with my tips and tutorials. Whether you're a beginner or an experienced producer, discover techniques to create professional-quality music.",
      "date": "2024-07-15",
      "significant_views": 223
    }
]



  items_filtered = this.items_initial;

}
