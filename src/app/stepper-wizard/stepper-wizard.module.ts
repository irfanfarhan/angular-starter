import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperWizardRoutingModule } from './stepper-wizard-routing.module';
import { StepperComponent } from './stepper.component';


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
    CommonModule,
    StepperWizardRoutingModule
  ]
})
export class StepperWizardModule { }
