import { Component, OnInit } from '@angular/core';
import { AngularFireStorage}from '@angular/fire/compat/storage'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  idpet : String = '';
  petsName: String = '';
  age: String = '';
  race: String = '';
  // AnimalDescription: String = '';
  petImgUrl: String = '';
  path: string = '';

  constructor(private http: HttpClient,private af: AngularFireStorage) { }


  upload(event: any) {
    this.path = event.target.files[0];
    console.log(this.path)
  }
  uploadImagee() {
    console.log(this.path);
    
    this.af
      .upload('path' + Math.random() + this.path, this.path)
      .then((response) => {
        console.log('response :', response);
        response.ref.getDownloadURL().then((res) => {
          console.log(res);
          this.path = res;
          this.petImgUrl=res
        });
      });
  }
  addpets(){
    let y = localStorage.getItem('session') as string;
    var post ={
      user_iduser : JSON.parse(y).iduser ,
      petsName : this.petsName,
      age : this.age,
      race : this.race,
      // AnimalDescription : this.AnimalDescription,
      petImgUrl : this.petImgUrl
    }
    console.log(post);
    this.http.post('http://localhost:3000/addPets', post).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
    
  }
  name(event: any){
    console.log(event.target.value);
    this.petsName = event.target.value;
  }
  Age(event: any){
    console.log(event.target.value);
    this.age = event.target.value;
  }
  Race(event: any){
    console.log(event.target.value);
    this.race = event.target.value;
  }
  // description(event: any){
  //   console.log(event.target.value);
  //   this.AnimalDescription = event.target.value;
  // }
  imagee(event: any){
    console.log(event.target.value);
    this.petImgUrl = event.target.value;
  }


  ngOnInit(): void {
  }

}
