import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  api_url = 'https://meetingbuddy.herokuapp.com/';

  constructor(public http: Http) {
  }

  public get(route) {
    return this.http.get(this.api_url+route).map(res => res.json());
  }

  public post(route, params) {
    return this.http.post(this.api_url+route,params).map(res => res.json());
  }

}
