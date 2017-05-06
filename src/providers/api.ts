import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicStorageModule } from '@ionic/storage';

@Injectable()
export class Api {
  api_url = '';

  constructor(public http: Http, storage: Storage) {
    storage.ready().then(() => {
      storage.get('age').then((val) => {
        this.api_url = val;
      });
    });
  }

  public get(route) {
  	return this.http.get(this.api_url+route);
  }

  public post(route, params) {
    return this.http.post(this.api_url+route,params);
  }

}
