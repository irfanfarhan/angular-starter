import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { COUNTRYLIST, GENDERLIST } from './constants/common.constants';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  isStep1: string = 'active';
  isStep2: string = '';
  isStep3: string = '';
  finalData: any;
  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

  }

  submit = (event: any) => {
    this.isStep1 = event?.isStep1;
    this.isStep2 = event?.isStep2;
    this.isStep3 = event?.isStep3;
    console.log(event?.formData);
    this.finalData = event;
  }
  
  submitData = () => {
    this.isStep1 = '';
    this.isStep2 = '';
    this.isStep3 = '';
    this.router.navigate(['/thank-you']);
  }
}
