import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { Router } from '@angular/router';

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
  constructor(private router : Router ) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    console.log(this.state);
  }
  state: any = {}

  ngOnInit(): void {
  this.state= JSON.parse(localStorage.getItem('session')||'');
  // this.firstName=y
  console.log(this.state)
  console.log(localStorage) ;

}
  
}
