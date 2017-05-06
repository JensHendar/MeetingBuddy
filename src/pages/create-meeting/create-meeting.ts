import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PlanningService } from '../../providers/planning-service';


@IonicPage()
@Component({
  selector: 'page-create-meeting',
  templateUrl: 'create-meeting.html',
})
export class CreateMeeting {
  newMeeting: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public planningService: PlanningService, private formBuilder: FormBuilder) {
  	this.newMeeting = this.formBuilder.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
      length: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMeeting');
  }

  saveNewMeeting(form) {
    let params = form.value;
    params.time = new Date(params.date+' '+params.time);
  	this.planningService.createMeeting(params).subscribe(
      res => {
        this.navCtrl.pop();
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {}
    );
  }

}
