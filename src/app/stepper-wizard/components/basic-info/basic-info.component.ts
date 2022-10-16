import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { COUNTRYLIST, GENDERLIST, PHONEEXTN } from '../../constants/common.constants';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup = this.fb.group({});
  countries: any = COUNTRYLIST;
  genderList: any = GENDERLIST;
  phoneExtnList: any = PHONEEXTN;
  @Input() finalData: any;
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
      ethncty: ['', Validators.required],
      dob: ['', Validators.required],
      hcPrvdr: ['', Validators.required],
      cntryOfResdnc: ['', Validators.required],
      mobileExtn: ['', Validators.required],
      mobile: ['', Validators.required]
    });
    if (this.finalData?.formData) {
      this.basicInfoForm.setValue(this.finalData?.formData);
    }
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
    });
  }
}
