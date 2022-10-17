import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DEMOGRAPHICS } from './constants/common.constants';


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
  demographics = DEMOGRAPHICS;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  submit = (event: any) => {
    this.isStep1 = event?.isStep1;
    this.isStep2 = event?.isStep2;
    this.isStep3 = event?.isStep3;
    console.log(event);
    this.finalData = event;
    const payload = [
      {
        type: 'demographics',
        categories: [
          {
            category: 'demographics',
            qstnset: this.getDemographics(event?.formData)
          }
        ]
      },
      event?.symptoms
    ]
    console.log(payload);
  }

  getDemographics = (data: any) => {
    const array: any = [];
    Object.entries(data).forEach(([key, value]) => {
      array.push({
        cde: key,
        text: this.demographics.filter((obj: any) => { return obj.cde === key; })[0].text,
        val: value
      });
    });
    return array;
  }

  submitData = () => {
    this.isStep1 = '';
    this.isStep2 = '';
    this.isStep3 = '';
    this.router.navigate(['/thank-you']);
  }
}
