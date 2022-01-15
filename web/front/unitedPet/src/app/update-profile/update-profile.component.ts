import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user:any
  iduser : Number = 0
  firstName: String = ''
  lastName:String = ''
  email:String = ''
  phoneNumber :String= ''
  adress:String= ''
  imageUrl:String= ''
  thumbnail : String = ''
  path : string = ''
  profile=profile
  // profile = []
  


  constructor(private http : HttpClient,private af:AngularFireStorage, private router : Router ) { 
    this.state = this.router.getCurrentNavigation()?.extras.state

   }
  state: any = {}

    



  firstname(event:any){
    this.firstName=event.target.value
    }
    lastname(event:any){
    this.lastName=event.target.value
    }
    Email(event:any){
    this.email=event.target.value
    }
    phonenumber(event:any){
    this.phoneNumber=event.target.value
    }
    Adress(event:any){
    this.adress=event.target.value
    }
    image(event:any){
    this.imageUrl=event.target.value
    }
  uplode(event : any ){
  this.path = event.target.files[0]
  }
  
  uploadThumbnail() {    
    this.af
    .upload('path' + Math.random() + this.path, this.path)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.path = res;
        this.imageUrl=res
        console.log("hhh",this.imageUrl)
      });
    });
}


  updateProfile() {
    const data = {
      firstName: this.firstName, // or ....
      lastName: this.lastName, // or ....
      email: this.email,
      phoneNumber : this.phoneNumber,
      adress : this.adress,
      imageUrl : this.imageUrl
    };
    // console.log(data);
    
    let y = localStorage.getItem('session') as string;
    var id = JSON.parse(y).iduser;
    // console.log(id);
    

    this.http
      .put<any>(`http://localhost:3000/editProfil/${id}`, data)
      // console.log(id)
      
      .subscribe({
        next:Response =>{
          console.log('edited',Response)
          localStorage.setItem('session',Response)
          this.router.navigateByUrl('profile')     
          
        },
        error:error =>console.log('err',error)
        
      })

      // .subscribe((result) => 
      // console.log(result, 'this is result')
     
      
      // );
  }
  ngOnInit(): void {
    // let y = localStorage.getItem('session') as string;
    // this.iduser = JSON.parse(y)[0].iduser;
    // console.log(y)
    // this.getuserData();
  this.state = JSON.parse(localStorage.getItem('session')||'');
  
  }

      

}
