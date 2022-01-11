import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
 constructor( public shared:SharedService ) { }

  ngOnInit(): void {
    this.shared.profile
  }
logout(){
  localStorage.clear()
  this.shared.islogged=true
  this.shared.log=false
  this.shared.profile=false
}



}
