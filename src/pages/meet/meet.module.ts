import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetPage } from './meet';

@NgModule({
  declarations: [
    MeetPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetPage),
  ],
  exports: [
    MeetPage
  ]
})
export class MeetModule {}
