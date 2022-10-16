import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRITERIALIST, YESNO } from '../../constants/common.constants';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize = () => {
    this.symptoms = {
      "symptom1": "Musculoskeletal Symptoms",
      "musculoskeletalCategories": [
        {
          "id": 1,
          "category": "Dyspnea during excercise",
          "q1": "Q1",
          "q1text": "Do you experience extreme fatigue/intolerence while exercising?",
          "q2": "Q2",
          "q2text": "If you have answered this question 'Yes', since when?",
          "q1val": "",
          "q2val": "",
          "list": [],
          "subText": 'since when?'
        },
        {
          "id": 2,
          "category": "Myalgia",
          "q1": "Q3",
          "q1text": "Do you experience frequent muscle pain or muscle cramps?",
          "q2": "Q4",
          "q2text": "If you have answered this question 'Yes', since when?",
          "q1val": "",
          "q2val": "",
          "list": [],
          "subText": 'since when?'
        },
        {
          "id": 3,
          "category": "Myalgia",
          "q1": "Q6",
          "q1text": "Do you often experience weakness in arms and legs?",
          "q2": "Q6",
          "q2text": "If you have answered this question 'Yes', since when?",
          "q1val": "",
          "q2val": "",
          "list": [],
          "subText": 'since when?'
        },
        {
          "id": 4,
          "category": "Fatigue",
          "q1": "Q14",
          "q1text": "Do you experience difficulty in one or more of these activities?",
          "q2": "Q15",
          "q2text": "If you have answered this question 'Yes', since when?",
          "q1val": "",
          "q2val": "",
          "list": [
            {
              title: 'Running',
              checked: false,
            }, {
              title: 'Walking',
              checked: false,
            },
            {
              title: 'Climbing Stairs',
              checked: false,
            },
            {
              title: 'Rising from a chair',
              checked: false,
            },
            {
              title: 'Imbalance while sitting',
              checked: false,
            }],
          "subText": 'since when?'
        }
      ],
      "symptom2": "Skeletal Symptoms",
      "skeletalCategories": [
        {
          "id": 5,
          "category": "",
          "q1": "Q43",
          "q1text": "Are you prone to fractures?",
          "q2": "Q44",
          "q2text": "If you have answered this question 'Yes', since when?",
          "q1val": "",
          "q2val": "",
          "subText": 'how many in past 1 years?'
        }
      ]
    };
  }

  submit = () => {
    this.dataFormat();
  }


  dataFormat = () => {
    const data = {
      "type": "Symptoms",
      "categories": [
        {
          "category": this.symptoms?.symptom1,
          "subCategories": this.getSubCategories(this.symptoms?.musculoskeletalCategories)
        },
        {
          "category": this.symptoms?.symptom2,
          "qstnset": this.getQstnset(this.symptoms?.skeletalCategories)
        }
      ]
    }
    console.log(data);
    this.submitEvent.emit({
      isStep1: 'complete',
      isStep2: 'complete',
      isStep3: 'active',
      formData: this.finalData?.formData
    });
  }

  getSubCategories = (data: any) => {
    let subCategories: any = [];
    if (data?.length > 0) {
      for (let item of data) {
        subCategories.push({
          "category": item?.category,
          "qstnset": [
            {
              "cde": item?.q1,
              "text": item?.q1text,
              "val": item?.q1val
            },
            {
              "cde": item?.q2,
              "text": item?.q2text,
              "val": item?.q2val
            }
          ]
        })
      }
    }
    return subCategories;
  }

  getQstnset = (data: any) => {
    let qstnset: any = [];
    if (data?.length > 0) {
      for (let item of data) {
        qstnset.push({
          "cde": item?.q1,
          "text": item?.q1text,
          "val": item?.q1val
        })
      }
    }
    return qstnset;
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
