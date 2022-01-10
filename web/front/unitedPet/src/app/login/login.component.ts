import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName: String = ''
  password:String= ''
  constructor(
    private http: HttpClient,
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    
    var user = {
      firstName: this.firstName,
      password:this.password
    }
    console.log(user)
    this.http.post('http://localhost:3000/login',user ).subscribe({next:Response=>{
      console.log(Response)
      localStorage.setItem("session", JSON.stringify(Response))
       this.route.navigateByUrl('');
    },
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
