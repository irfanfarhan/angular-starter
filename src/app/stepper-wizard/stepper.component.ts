import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  isStep1: string = '';
  isStep2: string = 'active';
  isStep3: string = '';
  finalData: any;
  constructor(private router: Router) {
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
