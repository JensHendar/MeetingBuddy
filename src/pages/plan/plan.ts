import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanningService } from '../../providers/planning-service';

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
  providers: [PlanningService]
})
export class PlanPage {

	meetings = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public planningService: PlanningService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Plan');
  }

  ionViewDidEnter() {
    this.planningService.getMeetings().subscribe(
      res => {
        console.log(res);
        this.meetings = res;
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

}
