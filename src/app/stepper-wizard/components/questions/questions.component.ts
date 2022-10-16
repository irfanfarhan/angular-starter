import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Input() finalData: any;
  questionsForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize = () => {
    this.questionsForm = this.fb.group({
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
    // if (this.finalData?.formData) {
    //   this.questionsForm.setValue(this.finalData?.formData);
    // }
  }

  get form() {
    return this.questionsForm?.controls;
  }

  submit = () => {
    this.submitEvent.emit({
      isStep1: 'complete',
      isStep2: 'complete',
      isStep3: 'active',
      formData: this.finalData?.formData
    })
  }

  back = () => {
    this.submitEvent.emit({
      isStep1: 'active',
      isStep2: '',
      isStep3: '',
      formData: this.finalData?.formData
    })
  }
}
