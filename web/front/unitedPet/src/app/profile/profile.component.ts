import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  // profile=[]
  constructor(private router : Router, private http : HttpClient) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    console.log(this.state);
  }
  state: any = {}

 
  

  
  ngOnInit(): void {
  this.state= JSON.parse(localStorage.getItem('session')||'');

  // console.log(this.state)
  // console.log(localStorage) ;
  this.http.get<any>(`http://localhost:3000/profile`
  
  )
  
  .subscribe({
    next: Response => {
      //  this.item = Response;
      console.log("itemsssss", Response);
    },
    error: error => console.log('errorrr',error)
  });

}
  
}
