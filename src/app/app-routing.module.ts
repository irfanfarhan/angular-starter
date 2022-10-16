import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./stepper-wizard/stepper-wizard.module').then((m) => m.StepperWizardModule)
  },
  {
    path: 'thank-you',
    component: ThankYouPageComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }