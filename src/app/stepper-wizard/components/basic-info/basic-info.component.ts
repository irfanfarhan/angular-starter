import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { COUNTRYLIST, GENDERLIST } from '../../constants/common.constants';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup = this.fb.group({});
  countries: any = COUNTRYLIST;
  genderList: any = GENDERLIST;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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

  submit = () => {
    this.submitEvent.emit({
      isStep1: 'complete',
      isStep2: 'active',
      isStep3: 'none',
      formData: this.basicInfoForm?.getRawValue()
    })
  }
}
