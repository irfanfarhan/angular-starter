import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ArchwizardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
