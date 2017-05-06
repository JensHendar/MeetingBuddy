import { Component } from '@angular/core';

import { PlanPage } from '../plan/plan';
import { MeetPage } from '../meet/meet';
import { AnalyzePage } from '../analyze/analyze';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlanPage;
  tab2Root = MeetPage;
  tab3Root = AnalyzePage;

  constructor() {

  }
}
