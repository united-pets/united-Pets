import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent implements OnInit {
storeName ='';
storeLogo ='';
taxRegistrationNumber = '';
taxRegistrationNumbzerImage='';
constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
onChangeStoreName(event:any){
  this.storeName = event.target.value
}
onChangeStoreLogo(event:any){
  this.storeLogo = event.target.file
}
onChangetaxRegistrationNumber(event:any){
  this.taxRegistrationNumber = event.target.value
}
onChangetaxRegistrationNumbzerImage(event:any){
  this.taxRegistrationNumbzerImage = event.target.file
}

formStore(){
  let y = localStorage.getItem('session') as string;
let storeForm = {
  user_iduser : JSON.parse(y).iduser ,
storeName :this.storeName,
storeLogo :this.storeLogo,
taxRegistrationNumber :this.taxRegistrationNumber,
taxRegistrationNumbzerImage: this.taxRegistrationNumbzerImage
}
  this.http.post('http://localhost:3000/form-store', storeForm )
    .subscribe({next:((Response:any)=>{
     console.log(Response)
    }),
    error:error=>{
      console.error(error)
    }})
}
}

