import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      storage.ready().then(() => {
        storage.set('username', 'jens');
        storage.set('user_id', '123456');
        storage.set('api_url', 'https://meetingbuddy.herokuapp.com/');
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
