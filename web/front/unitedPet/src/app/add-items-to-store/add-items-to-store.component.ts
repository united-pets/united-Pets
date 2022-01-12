import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-items-to-store',
  templateUrl: './add-items-to-store.component.html',
  styleUrls: ['./add-items-to-store.component.css']
})
export class AddItemsToStoreComponent implements OnInit {
itemName ='';
itemImage = '';
itemPrice = '';
itemDescription='';
itemCategory='';
itemQuantity = '';
  
constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
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
let item = {
itemName :this.itemName,
itemImage :this.itemImage,
itemPrice :this.itemPrice,
itemDescription: this.itemDescription,
itemCategory: this.itemCategory,
itemQuantity: this.itemQuantity
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