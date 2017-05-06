import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { PlanPage } from '../pages/plan/plan';
import { MeetPage } from '../pages/meet/meet';
import { AnalyzePage } from '../pages/analyze/analyze';
import { MeetingDetail } from '../pages/meeting-detail/meeting-detail';
import { CreateMeeting } from '../pages/create-meeting/create-meeting';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Services
import { Api } from '../providers/api';
import { PlanningService } from '../providers/planning-service';

@NgModule({
  declarations: [
    MyApp,
    PlanPage,
    MeetPage,
    AnalyzePage,
    MeetingDetail,
    CreateMeeting,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlanPage,
    MeetPage,
    AnalyzePage,
    MeetingDetail,
    CreateMeeting,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    PlanningService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
