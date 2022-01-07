import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  firstName: String = ''
  lastName:String = ''
  email:String = ''
  phoneNumber :String= ''
  adress:String= ''
  imageUrl:String= ''
  thumbnail : String = ''
  profile=profile;
  path : string = ''



  constructor(private http : HttpClient, private af:AngularFireStorage  ) {  
    //  private afStorage:AngularFireStorage
  }


   update() {
    var url = "http://localhost:3000/updateProfile"
    this.http.post(url,this.profile).subscribe((res)=>{
      console.log(res);
    })
    
  }

  uplode(event : any ){
  this.path = event.target.files[0]
  
  console.log(this.path);

  }

  uploadThumbnail() {    
    this.af
    .upload('path' + Math.random() + this.path, this.path)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.path = res;
        this.imageUrl=res
        console.log("hhh",this.imageUrl)
      });
    });
}

  ngOnInit(): void {
  }

}
