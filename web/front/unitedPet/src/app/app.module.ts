import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ProfileComponent,
    UpdateProfileComponent,
    SignupComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFirestoreModule ,
       AngularFireModule.initializeApp({
        apiKey: "AIzaSyBMiLuyb1jsTJ7EqmGt0TJOy9qDndfFLec",
        authDomain: "copper-harbor-331713.firebaseapp.com",
        projectId: "copper-harbor-331713",
        storageBucket: "copper-harbor-331713.appspot.com",
        messagingSenderId: "1032981236332",
        appId: "1:1032981236332:web:ef77379dc4fcb214732649",
        measurementId: "G-JHRVKT56RF"
      }),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
