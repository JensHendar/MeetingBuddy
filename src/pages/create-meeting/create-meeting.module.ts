import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMeeting } from './create-meeting';

@NgModule({
  declarations: [
    CreateMeeting,
  ],
  imports: [
    IonicPageModule.forChild(CreateMeeting),
  ],
  exports: [
    CreateMeeting
  ]
})
export class CreateMeetingModule {}
