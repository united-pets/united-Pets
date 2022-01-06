import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { HttpClient } from '@angular/common/http';

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



  constructor(private http : HttpClient) {  }


   update() {
    var url = "http://localhost:3000/updateProfile"
    this.http.post(url,this.profile).subscribe((res)=>{
      console.log(res);
    })
    
  }

  ngOnInit(): void {
  }

}
