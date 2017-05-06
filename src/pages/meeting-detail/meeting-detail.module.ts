import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingDetail } from './meeting-detail';

@NgModule({
  declarations: [
    MeetingDetail,
  ],
  imports: [
    IonicPageModule.forChild(MeetingDetail),
  ],
  exports: [
    MeetingDetail
  ]
})
export class MeetingDetailModule {}
