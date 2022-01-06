import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  AnimalName: String =""
  AnimalDescription: String=""
  AnimalLocalisation: String=""
  AnimalImage :String=""
  constructor() { }
 
  ngOnInit(): void {
    

  }
  

}
