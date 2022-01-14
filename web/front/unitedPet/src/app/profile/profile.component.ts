import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormStoreComponent } from '../form-store/form-store.component';
import { AngularFireStorage}from '@angular/fire/compat/storage'

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
storeName ='';
storeLogo ='';
taxRegistrationNumber = '';
taxRegistrationNumbzerImage=''
itemName ='';
itemImage = '';
itemPrice = '';
itemDescription='';
itemCategory='';
itemQuantity = '';
path: string = '';
petImgUrl: String = '';

  constructor(private router : Router, private http : HttpClient , private af: AngularFireStorage) {
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
// uplode from photos
upload(event: any) {
  this.path = event.target.files[0];
  console.log(this.path)
}
uploadImage() {
  console.log(this.path);
  
  this.af
    .upload('path' + Math.random() + this.path, this.path)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.path = res;
        this.petImgUrl=res
      });
    });
}
image(event: any){
  console.log(event.target.value);
  this.petImgUrl = event.target.value;
}
//store registration
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
      localStorage.setItem("store", JSON.stringify(Response))
    }),
    error:error=>{
      console.error(error)
    }})
}
//add item
onChangeName(event:any){
  this.itemName = event.target.value;
}
onChangeImage(event:any){
  this.itemImage = event.target.file;
}
onChangePrice(event:any){
  this.itemPrice = event.target.value;
}
onChangeDescription(event:any){
  this.itemDescription = event.target.value;
}
onChangeCategory(event:any){
  this.itemCategory = event.target.value;
}
onChangeQuantity(event:any){
  this.itemQuantity = event.target.value;
}
// send post request for adding Item to the db store 
postAddItem(){
let y = localStorage.getItem('store') as string
let item = {
  itemName :this.itemName,
  itemImage :this.itemImage,
  itemPrice :this.itemPrice,
  itemDescription: this.itemDescription,
  itemCategory: this.itemCategory,
  itemQuantity: this.itemQuantity,
  Store_idStore: JSON.parse(y)[0].idStore,
}
this.http.post('http://localhost:3000/add-items-to-store',item )
.subscribe({next:((Response:any)=>{
     console.log(Response)
}),
error:error=>{
  console.error(error)
}})
 }
}
