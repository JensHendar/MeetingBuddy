import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
/**
 * Generated class for the Meet page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-meet',
  templateUrl: 'pi.html',
})
export class PiPage {
  @ViewChild(List) list: List;

  meeting = null;
  agendaItems = [
    {
      item: {
        agenda_point: {
          id: 18,
          user_id: 16,
          meeting_id: 21,
          body: "Next year, the hack should be underwater.",
          time: 15,
          created_at: "2017-05-06T13:34:38.579Z",
          updated_at: "2017-05-06T13:34:38.579Z"
        },
        has_votes: true,
        yes_votes: 20,
        no_votes: 1
      }
    },
{
  item: {
    agenda_point: {
      id: 19,
      user_id: 16,
      meeting_id: 21,
      body: "More donuts for the hack.",
      time: 10,
      created_at: "2017-05-06T13:34:38.583Z",
      updated_at: "2017-05-06T13:34:38.583Z"
    }
  }
},
    {
      item: {
        agenda_point: {
          id: 19,
          user_id: 16,
          meeting_id: 21,
          body: "More donuts for the hack.",
          time: 2,
          created_at: "2017-05-06T13:34:38.583Z",
          updated_at: "2017-05-06T13:34:38.583Z"
        }
      }
    }
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  startMeeting() {
    console.log("StartMeeting");
    console.log(this.agendaItems);
      this.setFocus(0);
      setTimeout(this.nextAgendaPoint, this.agendaItems[0].item.agenda_point.time*10);
  }
  agendaCounter = 0;

  nextAgendaPoint() {
    console.log("NEXT ONE");
    console.log(this.agendaItems);
    if (this.agendaCounter < this.agendaItems.length) {
      console.log("counter++");
      this.agendaCounter++;
      this.setFocus(this.agendaCounter);
      setTimeout(this.nextAgendaPoint, this.agendaItems[this.agendaCounter].item.agenda_point.time * 10);
    } else {
      this.agendaCounter = 0;
      console.log("FINISHED");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pi');
    this.meeting = this.navParams.get('meeting');
    console.log(this.meeting);
  }

  private setFocus(agendaCounter: number) {
    console.log(this.agendaItems[agendaCounter].item.agenda_point.body + "is current agendaPoint");
  }
}
