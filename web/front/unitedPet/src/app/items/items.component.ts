import { Component, OnInit } from '@angular/core';
import { item } from '../feed';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
item = item
  constructor() {
  
   }

  ngOnInit(): void {
  }

}
