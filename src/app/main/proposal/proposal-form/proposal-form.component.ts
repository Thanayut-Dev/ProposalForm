import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent implements OnInit {

  selectForm: FormGroup;
  selectData: any = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.selectData = {
      department: "",
      group: "",
      plan: "",
      product: "",
      activities: "",
      expense: "",
      list: ""
    }
    this.selectForm = this.createSelectForm();
  }

  createSelectForm(): FormGroup {
    return this.formBuilder.group({
      department: [this.selectData.department, Validators.required],
      group: [this.selectData.group, Validators.required],
      plan: [this.selectData.plan, Validators.required],
      product: [this.selectData.product, Validators.required],
      activities: [this.selectData.activities, Validators.required],
      expense: [this.selectData.expense, Validators.required],
      list: [this.selectData.list, Validators.required]
    });
  }

  department: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'หน่วยงาน!' },
    { name: 'หน่วยงานเอกชน', sound: 'หน่วยงาน!' },
  ];

  group: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  plan: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  product: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  activities: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  expense: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];


  onsubmit() {
    console.log(this.selectForm.value);
  }

}
