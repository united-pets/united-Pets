import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  AnimalName: String = '';
  AnimalDescription: String = '';
  AnimalLocalisation: String = '';
  AnimalImage: String = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  Addpost() {
    var post = {
      AnimalName: this.AnimalName,
      AnimalDescription: this.AnimalDescription,
      AnimalLocalisation: this.AnimalLocalisation,
      AnimalImage: this.AnimalImage,
    };

    console.log(post);
    this.http.post('http://localhost:3000/addPost', post).subscribe({
      next: (Response) => {
        console.log(Response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  name(event: any) {
    console.log(event.target.value);
    this.AnimalName = event.target.value;
  }
  description(event: any) {
    console.log(event.target.value);
    this.AnimalDescription = event.target.value;
  }
  localisation(event: any) {
    console.log(event.target.value);
   this.AnimalLocalisation = event.target.value;
  }
  image(event: any) {
    console.log(event.target.value);
    this.AnimalImage = event.target.value;
  }
  
}
