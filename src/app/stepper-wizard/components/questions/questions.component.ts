import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRITERIALIST, SYMPTOMQUESTIONS, YESNO } from '../../constants/common.constants';
import { Qstnset1Model, Qstnset2Model } from '../../models/stepper.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Input() finalData: any;
  symptoms: any;
  yesNoList: any = YESNO;
  criteriaList: any = CRITERIALIST;
  constructor() { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize = () => {
    this.symptoms = SYMPTOMQUESTIONS;
  }

  submit = () => {
    this.dataFormat();
  }


  dataFormat = () => {
    const data = {
      type: 'Symptoms',
      categories: [
        {
          category: this.symptoms?.symptom1,
          subCategories: this.getSubCategories(this.symptoms?.musculoskeletalCategories)
        },
        {
          category: this.symptoms?.symptom2,
          qstnset: [...this.mapQstnset1(this.symptoms?.skeletalCategories), ...this.mapQstnset2(this.symptoms?.skeletalCategories)]
        }
      ]
    }
    this.submitEvent.emit({
      isStep1: 'complete',
      isStep2: 'complete',
      isStep3: 'active',
      formData: this.finalData?.formData,
      symptoms: data
    });
  }


  getSubCategories = (data: any) => {
    let subCategories: any = [];
    if (data?.length > 0) {
      for (let item of data) {
        if (item?.list?.length > 0) {
          item.q1val = [...new Set(item.list.filter((obj: any) => { return obj.checked; }).map((i: any) => i.title))];
        }
        subCategories.push({
          category: item?.category,
          qstnset: [new Qstnset1Model(item), new Qstnset2Model(item)]
        })
      }
    }
    return subCategories;
  }

  mapQstnset1 = (array: any) => {
    return array.map(
      (obj: any) => (
        new Qstnset1Model(obj))
    )
  }

  mapQstnset2 = (array: any) => {
    return array.map(
      (obj: any) => (
        new Qstnset2Model(obj))
    )
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
