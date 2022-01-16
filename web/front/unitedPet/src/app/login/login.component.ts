import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {SharedService} from '../shared/shared.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName: String = ''
  password:String= ''
  state : object = {}
  constructor(private http:HttpClient , private router: Router , public shared:SharedService) { }

  ngOnInit(): void {
    this.shared.islogged
    this.shared.log
    this.shared.profile
    this.shared.addLost
  }
  login(){
    
    var user = {
      firstName: this.firstName,
      password:this.password
    }
    console.log(user)
    this.http.post('http://localhost:3000/login',user ).subscribe({next:((Response:any)=>{
      // console.log(Response)
      this.state = Response[0]
      console.log(this.state);
      this.router.navigate(['profile'],{state : this.state})
      localStorage.setItem("session", JSON.stringify(Response[0]))
      this.shared.islogged=false
      this.shared.log=true
      this.shared.profile=true
      this.shared.addLost=true
    }),
    error:error=>{
      console.error(error)
    }})
    
    
    
  }
  name(event:any){
    console.log(event.target.value)
    this.firstName = event.target.value
  }
  Psw(event:any){
    console.log(event.target.value)
    this.password = event.target.value
  }
}
