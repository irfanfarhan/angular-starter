import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit, AfterViewInit {

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ref.detectChanges();
    }, 100);

  }

}
