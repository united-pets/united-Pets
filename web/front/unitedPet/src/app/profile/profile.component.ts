import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: String = ''
  lastName:String = ''
  email:String = ''
  phoneNumber :String= ''
  adress:String= ''
  imageUrl:String= ''
  profile=profile
  constructor() {}

  ngOnInit(): void {

  console.log(localStorage) ;
}
  
}
