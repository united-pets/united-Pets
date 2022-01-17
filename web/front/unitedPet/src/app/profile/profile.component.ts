import { Component, OnInit ,SimpleChange, OnChanges } from '@angular/core';
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
pathLogoStore: String = '';
pathRegistration : String = ''
LogoStore: String = '';
ImageRegistration : String = '';
ImageItem : String = '';
patheImageItem : String = ''

paymentHandler:any = null;

  constructor(private router : Router, private http : HttpClient , private af: AngularFireStorage) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    console.log(this.state);
  }
  state: any = {}

 
  

  
  ngOnInit(): void {
    this.getItems()
  this.state= JSON.parse(localStorage.getItem('session')||'');
  
  this.invokeStripe();


  // console.log(this.state)
  // console.log(localStorage) ;
  // this.http.get<any>(`http://localhost:3000/profile`
  
  // )
  
  // .subscribe({
  //   next: Response => {
  //     //  this.item = Response;
  //     console.log("itemsssss", Response);
  //   },
  //   error: error => console.log('errorrr',error)
  // });
  
}
// this is the functions related to the stripe api for the payment 
makePayment(amount:any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51K5AeAI8HBYKtbzFQjaXDSmaCOcULlIcKAqn8hsX2xe12CgeoXY8C4GpTbkDY2ZaU4rLAfWplKjP2dMpk4xXGGQv00NLMjIBbM',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken)
    }
  })

  paymentHandler.open({
    name: 'Positronx',
    description: '3 widgets',
    amount: amount * 100
  })
}
invokeStripe() {
  if(!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement("script");
    script.id = "stripe-script";
    script.type = "text/javascript";
    script.src = "https://checkout.stripe.com/checkout.js";
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51K5AeAI8HBYKtbzFQjaXDSmaCOcULlIcKAqn8hsX2xe12CgeoXY8C4GpTbkDY2ZaU4rLAfWplKjP2dMpk4xXGGQv00NLMjIBbM',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken)
          alert('Payment has been successfull!');
        }
      });
    }
   
      
    window.document.body.appendChild(script);
  }
}

  
// uplode from photos Store Logo
upload(event: any) {
  this.pathLogoStore = event.target.files[0];
  console.log(this.pathLogoStore)
}
uploadImage() {
  console.log(this.pathLogoStore);
  
  this.af
    .upload('path' + Math.random() + this.pathLogoStore, this.pathLogoStore)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.pathLogoStore = res;
        this.LogoStore=res
      });
    });
}
image(event: any){
  console.log(event.target.value);
  this.LogoStore = event.target.value;
}
// uplode from photos Tax Registration Image

uploadImage1() {
  // console.log('pathRegistration======>',this.pathRegistration);
  
  this.af
    .upload('path' + Math.random() + this.pathRegistration, this.pathRegistration)
    .then((response : any) => {
      console.log('response1 :', response);
      response.ref.getDownloadURL().then((res : any) => {
        console.log(res);
        this.pathRegistration = res;
        this.ImageRegistration=res
        console.log(this.ImageRegistration)
      });
    });
}
image1(event: any){
  console.log('ImageRegistration====>',event.target.value);
  this.ImageRegistration = event.target.value;
}
//uplode from photos Tax ImageItem
uploadImage2() {
  console.log('patheImageItem ===>',this.patheImageItem);
  
  this.af
    .upload('path' + Math.random() + this.patheImageItem, this.patheImageItem)
    .then((response : any) => {
      console.log('response1 :', response);
      response.ref.getDownloadURL().then((res : any) => {
        console.log(res);
        this.patheImageItem = res;
        this.itemImage=res
        console.log('hhhhh',this.itemImage)
      });
    });
}
image2(event: any){
  console.log('ImageItem ===>',event.target.value);
  this.ImageItem = event.target.value;
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
 //get Items
 getItems(){
  let y = localStorage.getItem('store') as string
 
    let Store_idStore = JSON.parse(y)[0].idStore
 
  this.http.get(`http://localhost:3000/storeItem`, Store_idStore)
.subscribe({next:((Response:any)=>{
     console.log(Response)
}),
error:error=>{
  console.error(error)
}})
 }
}
