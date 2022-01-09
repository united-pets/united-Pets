import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../Mock posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  AnimalName: String = '';
  AnimalDescription: String = '';
  AnimalLocalisation: String = '';
  AnimalImage: String = '';
  // Posts = Posts;
  Posts: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/posts')

      .subscribe({
        next: (Response) => {
          console.log('response', Response);
          this.Posts = Response;
          console.log('here', this.Posts);
        },
        error: (error) => console.log('error', error),
      });
  }
}
