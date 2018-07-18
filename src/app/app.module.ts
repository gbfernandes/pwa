import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PhotosPage } from '../pages/photos/photos';
import { PicturePage } from '../pages/picture/picture';
import { SigninPage } from '../pages/signin/signin';
import { ProfilePage } from '../pages/profile/profile';
import { SendPicturePage } from '../pages/send-picture/send-picture';
import { MapPage } from '../pages/map/map';

export const environment = {
  firebase: {
    apiKey: "AIzaSyAU3lNRrtr7Pt7r7SZ-gyq8U-3wHY-hwsU",
    authDomain: "pcf-arch.firebaseapp.com",
    databaseURL: "https://pcf-arch.firebaseio.com",
    projectId: "pcf-arch",
    storageBucket: "",
    messagingSenderId: "1032216551388"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PhotosPage,
    PicturePage,
    SigninPage,
    ProfilePage,
    SendPicturePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PhotosPage,
    PicturePage,
    SigninPage,
    ProfilePage,
    SendPicturePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
