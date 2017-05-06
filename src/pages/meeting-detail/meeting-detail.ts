import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  invites = [];
  agendaForm: boolean = false;
  segmentSelect = 'agenda';
  newAgendaPoint: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public planningService: PlanningService,
    public agendaService: AgendaService,
    private formBuilder: FormBuilder
    ) {
      this.newAgendaPoint = this.formBuilder.group({
        body: ['', Validators.required],
        time: [0, Validators.required]
      });
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
        this.invites = res.invites;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

  answerMeeting(answer) {
    //this.planningService.
  }

  saveNewAgendaPoint(agendaPoint) {
    let agendaPointValue = agendaPoint.value;
    agendaPointValue.user_id = this.user.id;
    this.agendaService.createPoint(this.meeting.id, agendaPointValue).subscribe(
      res => {
        this.getMeetingDetails(this.meeting.id);
        this.newAgendaPoint.reset();
      },
      err => {},
      () => {}
    );
  }

  voteAgendaPoint(pointId, value: boolean) {
    this.agendaService.votePoint(this.meeting.id, pointId, { "vote": value.toString() }).subscribe(
      res => {
        this.getMeetingDetails(this.meeting.id);
        console.log(res);
      },
      err => {},
      () => {}
    );
  }

}
