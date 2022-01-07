import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import  {ProfileComponent}  from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path:"profile",
    component:ProfileComponent
  },

  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"update-profile",
    component:UpdateProfileComponent
  },
  {
    path:"items",
    component:ItemsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
