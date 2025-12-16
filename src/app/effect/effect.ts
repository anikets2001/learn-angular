import { Component, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  posts = signal<Post[]>([]);

  constructor(private readonly http: HttpClient) {
    effect(() => {
      const currentPosts = this.posts();

      // Only make API call if posts is empty (initial load)
      if (currentPosts.length === 0) {
        this.http
          .get<any[]>('https://jsonplaceholder.typicode.com/posts')
          .subscribe((data: any) => {
            this.posts.set(data.slice(0,10));
          });
      }
    });
  }
}
