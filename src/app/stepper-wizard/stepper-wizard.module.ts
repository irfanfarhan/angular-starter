import { NgModule } from '@angular/core';

import { StepperWizardRoutingModule } from './stepper-wizard-routing.module';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../shared/shared.module';

export const uiComponents = [
  StepperComponent
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
