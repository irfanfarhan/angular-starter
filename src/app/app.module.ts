import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ThankYouPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ArchwizardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
