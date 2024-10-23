import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
constructor(private router: Router){}

  goToPost(postId: number) {
    this.router.navigate(['/post']);
  }

}
