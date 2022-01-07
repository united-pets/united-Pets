import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat/';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from '../environments/environment';

import { ItemsComponent } from './items/items.component';
;
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
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
