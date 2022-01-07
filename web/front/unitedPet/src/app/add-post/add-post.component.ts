import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage}from '@angular/fire/compat/storage'

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
  path: string = '';
  // thumbnail:string=''
  constructor(
    private http: HttpClient,
    private af: AngularFireStorage
  ) {}

  ngOnInit(): void {}
  upload(event: any) {
    this.path = event.target.files[0];
    console.log(this.path)
  }
  uploadImage() {
    console.log(this.path);
    
    this.af
      .upload('path' + Math.random() + this.path, this.path)
      .then((response) => {
        console.log('response :', response);
        response.ref.getDownloadURL().then((res) => {
          console.log('downloadUrl :', res);
          this.path = res;
        });
      });
  }
  Addpost() {
    var post = {
      AnimalName: this.AnimalName,
      AnimalDescription: this.AnimalDescription,
      AnimalLocalisation: this.AnimalLocalisation,
      AnimalImage: this.AnimalImage,
    };

    console.log(post);
    this.http.post('http://localhost:3000/addPost', post).subscribe({
      next: (data) => {
        console.log(data);
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
