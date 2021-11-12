import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCS-G-BE-8wWb48nPunBpM-dv1JSJLLmxk',
  authDomain: 'hito2desarrollointerfaces.firebaseapp.com',
  projectId: 'hito2desarrollointerfaces',
  storageBucket: 'hito2desarrollointerfaces.appspot.com',
  messagingSenderId: '38146617491',
  appId: '1:38146617491:web:40d239af9c628ff0f95d66',
  measurementId: 'G-VXJ59W9KHL',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFireAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
