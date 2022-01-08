import { Component, OnInit } from '@angular/core';
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
  Posts = Posts
  constructor() {}

  ngOnInit(): void {}
}
