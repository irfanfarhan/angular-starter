import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submit = () => {
    this.submitEvent.emit({
      isStep1: 'complete',
      isStep2: 'complete',
      isStep3: 'active',
      formData: {}
    })
  }

  back = () => {
    this.submitEvent.emit({
      isStep1: 'active',
      isStep2: '',
      isStep3: '',
      formData: {}
    })
  }
}
