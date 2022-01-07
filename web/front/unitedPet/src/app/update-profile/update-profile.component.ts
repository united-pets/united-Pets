import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { HttpClient } from '@angular/common/http';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
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
  profile=profile;



  constructor(private http : HttpClient, ) {  
    //  private afStorage:AngularFireStorage
  }


   update() {
    var url = "http://localhost:3000/updateProfile"
    this.http.post(url,this.profile).subscribe((res)=>{
      console.log(res);
    })
    
  }

  // uploadThumbnail(event: Event) {    
  //   const target = event.target as HTMLInputElement;
  //       const files = target.files as FileList;
  //       console.log('files', files[0])
  // this.afStorage.upload('image'+Math.random()+files[0].name, files[0]).then((response )=>{
  //   console.log('response :', response)
  //    response.ref.getDownloadURL().then((res)=>{
  //     console.log('downloadUrl :', res)
  //     this.thumbnail=res
  //   })
  // })
  // }

  ngOnInit(): void {
  }

}
