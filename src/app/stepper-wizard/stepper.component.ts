import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  basicInfoForm: FormGroup = this.fb.group({});

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.initialize()
  }

  initialize() {
    this.basicInfoForm = this.fb.group({
      month: ['', Validators.required],
      start_date_end_date: ['', Validators.required],
      title: ['', Validators.required]
    });
  }
}
