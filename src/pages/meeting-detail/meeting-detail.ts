import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanningService } from '../../providers/planning-service';
import { AgendaService } from '../../providers/agenda-service';

@IonicPage()
@Component({
  selector: 'page-meeting-detail',
  templateUrl: 'meeting-detail.html',
})
export class MeetingDetail {

  meeting = null;
  user = null;
  agenda_points = [];
  participants = [];
  segmentSelect = 'agenda';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public planningService: PlanningService,
    public agendaService: AgendaService
    ) {

  }

  ionViewDidLoad() {
    this.meeting = this.navParams.get('meeting');
    this.getMeetingDetails(this.meeting.id);
  }

  getMeetingDetails(meetingId) {
    this.planningService.getMeeting(meetingId).subscribe(
      res => {
        this.meeting = res.meeting;
        this.user = res.user;
        this.agenda_points = res.agenda_points
        this.participants = res.participants;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  voteAgendaPoint(pointId, value) {
    let params = {
      vote: value
    }
    this.agendaService.votePoint(this.meeting.id, pointId, params).subscribe(
      res => {
        this.getMeetingDetails(this.meeting.id);
        console.log(res);
      },
      err => {},
      () => {}
    );
  }

}
