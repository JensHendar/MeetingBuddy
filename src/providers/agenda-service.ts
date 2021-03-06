import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class AgendaService {

  constructor(public api: Api) {
  }

  //Posts
  votePoint(meetingId, pointId, params) {
  	console.log(params);
  	return this.api.post('meetings/' + meetingId + '/agenda_points/' + pointId + '/votes', params);
  }

  createPoint(meetingId, params) {
  	console.log(params);
  	return this.api.post('meetings/'+ meetingId +'/agenda_points', params);
  }

}
