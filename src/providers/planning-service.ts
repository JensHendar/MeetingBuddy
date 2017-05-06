import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class PlanningService {

  constructor(public api: Api) { 
    console.log('Hello PlanningService Provider');
  }

  //Gets
  getMeetings() {
  	return this.api.get('meetings');
  }

  getMeeting(meetingId) {
  	return this.api.get('meeting/'+meetingId);
  }

  //Posts
  answerMeeting(meetingId, answer) {
  	return this.api.post('meeting/'+meetingId, answer);
  }

  createMeeting(meetingId, meetingInfo) {
  	return this.api.post('meeting/'+meetingId, meetingInfo);
  }

  cancelMeeting(meetingId, meetingInfo) {
  	return this.api.post('meeting/'+meetingId, meetingInfo);
  }

}
