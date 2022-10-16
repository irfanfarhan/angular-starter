import { NgModule } from '@angular/core';

import { StepperWizardRoutingModule } from './stepper-wizard-routing.module';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../shared/shared.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { QuestionsComponent } from './components/questions/questions.component';

export const uiComponents = [
  StepperComponent,
  BasicInfoComponent,
  QuestionsComponent
];

@NgModule({
  declarations: [
    ...uiComponents
  ],
  exports: [
    ...uiComponents
  ],
  imports: [
    SharedModule,
    StepperWizardRoutingModule
  ]
})
export class StepperWizardModule { }
