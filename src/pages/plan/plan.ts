import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanningService } from '../../providers/planning-service';
import { MeetingDetail } from '../meeting-detail/meeting-detail';
import { CreateMeeting } from '../create-meeting/create-meeting';

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
  providers: [PlanningService]
})
export class PlanPage {

	meetings = [];
  fakeMeetings = [
    {
      created_at:"2017-05-06T08:03:03.502Z",
      id:1,
      length:null,
      summary:"In a circus tent, all day.",
      time: new Date(),
      location: "Here",
      title:"Startup Hack!",
      updated_at:"2017-05-06T08:03:03.502Z",
      user: {
        id: 1,
        name: "Jens Hendar"
      }
    },
    {
      created_at:"2017-05-06T08:03:03.502Z",
      id:2,
      length:null,
      summary:"In a circus tent, all day.",
      time: new Date(),
      location: "Here",
      title:"Startup Hack!",
      updated_at:"2017-05-06T08:03:03.502Z",
      user: {
        id: 2,
        name: "Amber Wilke"
      }
    },
  ]

  meetingDetailPage = MeetingDetail;
  createMeetingPage = CreateMeeting;

  constructor(public navCtrl: NavController, public navParams: NavParams, public planningService: PlanningService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Plan');
  }

  ionViewDidEnter() {
    this.planningService.getMeetings().subscribe(
      res => {
        this.meetings = res.meetings;
      },
      err => {
        console.log(err);
        this.meetings = this.fakeMeetings;
      },
      () => {}
    );
  }

  createMeeting() {
    this.navCtrl.push(this.createMeetingPage);
  }

  meetingDetails(meeting) {
    console.log("Meeting has id: " + meeting.id);
    this.navCtrl.push(this.meetingDetailPage, {"meeting": meeting});
  }

}
