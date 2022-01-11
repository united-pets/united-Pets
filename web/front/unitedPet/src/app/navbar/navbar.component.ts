import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogged : any = false
  log: any = true
 constructor() { }

  ngOnInit(): void {
  }
logout(){
  localStorage.clear()
  this.islogged=true
  this.log=false
}

}
