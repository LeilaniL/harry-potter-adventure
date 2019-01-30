import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseAppConfigToken } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyService } from './my-service';
import { SortingHatComponent } from './sorting-hat/sorting-hat.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SortingHatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
