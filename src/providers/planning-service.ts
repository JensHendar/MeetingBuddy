import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class PlanningService {

  constructor(public api: Api) {
  }

  //Gets
  getMeetings() {
  	return this.api.get('meetings');
  }

  getMeeting(meetingId) {
  	return this.api.get('meetings/'+meetingId);
  }

  //Posts
  answerMeeting(meetingId, answer) {
  	return this.api.post('meeting/'+meetingId, answer);
  }

  createMeeting(meetingInfo) {
  	return this.api.post('meetings', meetingInfo);
  }

  cancelMeeting(meetingId, meetingInfo) {
  	return this.api.post('meeting/'+meetingId, meetingInfo);
  }

  //meetings/4/agenda_points

}
