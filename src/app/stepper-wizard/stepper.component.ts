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
  basicInfoForm: FormGroup = this.fb.group({});
  countries: any = COUNTRYLIST;
  genderList: any = GENDERLIST;
  isStep1: string = 'active';
  isStep2: string = '';
  isStep3: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.initialize()
  }

  initialize = () => {
    this.basicInfoForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      ethnicity: ['', Validators.required],
      dob: ['', Validators.required],
      healthcareprovider: ['', Validators.required],
      country: ['', Validators.required],
      mobileExtn: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  get form() {
    return this.basicInfoForm?.controls;
  }

  submit = (step1: any, step2: any, step3: any) => {
    this.isStep1 = step1;
    this.isStep2 = step2;
    this.isStep3 = step3;
    console.log(this.basicInfoForm?.getRawValue());
  }

  back = (step1: any, step2: any, step3: any) => {
    this.isStep1 = step1;
    this.isStep2 = step2;
    this.isStep3 = step3;
    console.log(this.basicInfoForm?.getRawValue());
  }

  submitData = () => {
    this.isStep1 = '';
    this.isStep2 = '';
    this.isStep3 = '';
    console.log(this.basicInfoForm?.getRawValue());
    this.router.navigate(['/thank-you']);
  }
}
