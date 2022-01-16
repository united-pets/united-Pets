import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  Items: any = []
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:3000/items`)
    .subscribe({
      next: Response => {
        console.log("itemsssss", Response);
        this.Items=Response
        console.log("hh", this.Items);
      },
      error: error => console.log('errorrr',error)
    });
  }

}
