import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalyzePage } from './analyze';

@NgModule({
  declarations: [
    AnalyzePage,
  ],
  imports: [
    IonicPageModule.forChild(AnalyzePage),
  ],
  exports: [
    AnalyzePage
  ]
})
export class AnalyzeModule {}
