import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'; //Slider Demo, Sample App more firebase dependencies
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const environment = {  //firebase configuration
  production: false,
  firebase: {
    apiKey: 'AIzaSyBai4-OpD2UNDbJdL3LGDwlecm6ppv9Zvw',
    authDomain: '<your-project-authdomain>',
    databaseURL: 'https://labwork-project.firebaseio.com/',
    projectId: 'Labwork-Project',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})


export class AppModule {}
