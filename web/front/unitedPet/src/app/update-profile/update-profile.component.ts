import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
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
  profile=profile
  constructor() {  }

  ngOnInit(): void {
  }

}
