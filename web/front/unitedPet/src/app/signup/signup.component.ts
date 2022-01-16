import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: String = ''
  lastName:String = ''
  email:String = ''
  phoneNumber :String= ''
  password:String= ''
  adress:String= ''
  imageUrl:String= ''

  constructor( private http:HttpClient ) { }
  // 
  ngOnInit(): void {
  
  }
  signup(){
    
    var user = {
      firstName: this.firstName,
      lastName:this.lastName,
      email:this.email,
      phoneNumber :this.phoneNumber,
      password:this.password,
      adress:this.adress,
      imageUrl:this.imageUrl,
    }
    console.log(user)
    this.http.post('http://localhost:3000/signup',user ).subscribe({next:data=>{
      console.log(data)
      
    },
    error:error=>{
      console.error(error)
    }})
    console.log('work');
    
    
    
  }
  name(event:any){
    console.log(event.target.value)
    this.firstName = event.target.value
  }
  last(event:any){
    console.log(event.target.value)
    this.lastName = event.target.value
  }
  adresss(event:any){
    console.log(event.target.value)
    this.adress = event.target.value
  }
  Number(event:any){
    console.log(event.target.value)
    this.phoneNumber = event.target.value
  }
  Psw(event:any){
    console.log(event.target.value)
    this.password = event.target.value
  }
  Email(event:any){
    console.log(event.target.value)
    this.email = event.target.value
  }
  Img(event:any){
    console.log(event.target.value)
    this.imageUrl= event.target.value
  }




  forgot(): void{
    
    var url =' http://localhost:3000/email';
    this.http.post(url,{
      email : this.email
    })
    .subscribe( () =>{
      console.log(('hiiiiiiii'));
      
    })
  }


  comp(){
    this.forgot()
    this.signup()
  }


}
