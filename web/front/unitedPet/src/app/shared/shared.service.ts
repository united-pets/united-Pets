import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  islogged : any =true
  log: any =false
  profile:any = false 
  addLost:any=false
  constructor() { }
  
}
