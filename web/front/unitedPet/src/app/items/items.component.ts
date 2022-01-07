import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { item } from '../feed';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
item = []
  constructor(
    private http: HttpClient
  ) {
  
   }

  ngOnInit(): void {
    console.log('-----');
    this.http.get<any>(`http://localhost:3000/items/items`)
    .subscribe({
      next: Response => {
         this.item = Response;
        console.log("itemsssss", Response);
      },
      error: error => console.log('errorrr',error)
    });
  
  }

}
