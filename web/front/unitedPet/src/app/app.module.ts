import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,

    ProfileComponent,
    UpdateProfileComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule
    // AngularFirestoreModule ,
    //    AngularFireModule.initializeApp(environment.firebase),
    //     AngularFireDatabaseModule,
    //     AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
