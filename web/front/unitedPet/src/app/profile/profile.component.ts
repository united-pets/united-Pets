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
// LogoStore: String = '';
ImageRegistration : String = '';
// ImageItem : String = '';
patheImageItem : String = ''

paymentHandler:any = null;
// configure : any =null

idpet : String = '';
petsName: String = '';
age: String = '';
race: String = '';
// AnimalDescription: String = '';
petImgUrl: String = '';
path: string = '';
showPetForm : boolean= false //create pet
showStoreForm : boolean = false
showPets : boolean= true //show pet


  constructor(private router : Router, private http : HttpClient , private af: AngularFireStorage) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    console.log(this.state);
  }
  state: any = {}
  getpets : any =[]
 
  

  
  ngOnInit(): void {
    // this.getItems()
  this.state= JSON.parse(localStorage.getItem('session')||'');
  
  this.invokeStripe();
    this.GetsPets()

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
ShowPetForm(){
  this.showPetForm =true
  this.showStoreForm =false
  this.showPets =false

 }
 ShowStoreregistration(){
this.showPetForm =false
  this.showStoreForm =true
  this.showPets =false

 }
 ShowPets(){
this.showPetForm =false
  this.showStoreForm =false
  this.showPets =true
 }

 GetsPets(){
  let y = localStorage.getItem('session') as string
  let user_iduser = JSON.parse(y).iduser
  this.http.get(`http://localhost:3000/GetPets/${user_iduser}`)
  .subscribe({next:((Response:any)=>{
    console.log('pets',Response)
    this.getpets = Response
    console.log('pets', this.getpets);
    
}),
error:error=>{
 console.error(error)
}})
 }
// this is the functions related to the stripe api for the payment 
makePayment(amount:any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51KIvKUFKhxMDKsg6HjVqi8gc3Ove3gY80VzQHryk8F4G3s5KA6jbqVMyYInEHIiIbS0N2lQjK5qotNFtngEGEv2h00K3o8nvvp',
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
        key: 'pk_test_51KIvKUFKhxMDKsg6HjVqi8gc3Ove3gY80VzQHryk8F4G3s5KA6jbqVMyYInEHIiIbS0N2lQjK5qotNFtngEGEv2h00K3o8nvvp',
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
  console.log(this.pathLogoStore)
  this.pathRegistration = event.target.files[0]
  console.log(this.pathRegistration);
  this.path = event.target.files[0]

  
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
        this.storeLogo=res
      });
    });
}
// image(event: any){
//   console.log(event.target.value);
//   this.storeLogo = event.target.value;
// }
// uplode from photos Tax Registration Image

uploadImage1() {
 
  this.af
    .upload('path' + Math.random() + this.pathRegistration, this.pathRegistration)
    .then((response : any) => {
      console.log('response1 :', response);
      response.ref.getDownloadURL().then((res : any) => {
        console.log(res);
        this.pathRegistration = res;
        this.ImageRegistration=res
        console.log(this.taxRegistrationNumbzerImage)
      });
    });
}
image1(event: any){
  console.log('taxRegistrationNumbzerImage====>',event.target.value);
  this.taxRegistrationNumbzerImage = event.target.value;
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
  this.itemImage = event.target.value;
}

//store registration
onChangeStoreName(event:any){
  this.storeName = event.target.value
}
onChangeStoreLogo(event:any){
  this.storeLogo = event.target.file
  this.pathLogoStore = event.target.files[0]
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
 ///////////////////////////////////////////////////////////////////////////// for add pets 
 uploadImagee() {
  console.log(this.path);
  
  this.af
    .upload('path' + Math.random() + this.path, this.path)
    .then((response) => {
      console.log('response :', response);
      response.ref.getDownloadURL().then((res) => {
        console.log(res);
        this.petImgUrl=res
      });
    });
}
addpets(){
  let y = localStorage.getItem('session') as string;
  var post ={
    user_iduser : JSON.parse(y).iduser ,
    petsName : this.petsName,
    age : this.age,
    race : this.race,
    // AnimalDescription : this.AnimalDescription,
    petImgUrl : this.petImgUrl
  }
  console.log(post);
  this.http.post('http://localhost:3000/addPets', post).subscribe({
    next: (data) => {
      console.log(data);
      this.getpets.push(post)
    },
    error: (error) => {
      console.log(error);
    },
  });
  
}
name(event: any){
  console.log(event.target.value);
  this.petsName = event.target.value;
}
Age(event: any){
  console.log(event.target.value);
  this.age = event.target.value;
}
Race(event: any){
  console.log(event.target.value);
  this.race = event.target.value;
}
// description(event: any){
//   console.log(event.target.value);
//   this.AnimalDescription = event.target.value;
// }
imagee(event: any){
  console.log(event.target.value);
  this.petImgUrl = event.target.value;
  this.path = event.target.files[0]
}
}
