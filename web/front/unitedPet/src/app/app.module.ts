import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsComponent } from './items/items.component';
;
import { ProfileComponent } from './profile/profile.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormStoreComponent } from './form-store/form-store.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddPetsComponent } from './add-pets/add-pets.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,

    ProfileComponent,
    UpdateProfileComponent,
    AddPostComponent,
    SignupComponent,
    LoginComponent,
    PostsComponent,
    NavbarComponent,
    FooterComponent,
    FormStoreComponent,
    HomeComponent,
    ContactComponent,
    AddPetsComponent,
    
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
 
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB1abdyT3VZykPkvKJQsLBxThqqCXiZrJU',
      authDomain: 'pets-adf2b.firebaseapp.com',
      projectId: 'pets-adf2b',
      storageBucket: 'pets-adf2b.appspot.com',
      messagingSenderId: '433767512994',
      appId: '1:433767512994:web:6f29ec9d65c24b949690fb',
      measurementId: 'G-FYJLH15TVJ',

      
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
