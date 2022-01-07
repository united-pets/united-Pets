import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName: String = ''
  password:String= ''
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  login(){
    
    var user = {
      firstName: this.firstName,
      password:this.password
    }
    console.log(user)
    this.http.post('http://localhost:3000/login',user ).subscribe({next:data=>{
      console.log(data)
      
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
