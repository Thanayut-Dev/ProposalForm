import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() dateStartLabelan: any;
  @Input() dateEndLabelan: any;
  @Output() clickFormSearch = new EventEmitter();

  dateFormGroup: FormGroup
  dateTime: any = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // datestart = new FormControl(new Date());
  // dateend = new FormControl((new Date()).toISOString());

  ngOnInit() {

    //แบบนี้ก็ใช้ได้
    // this.dateGroup = new FormGroup({
    //   dateStart: new FormControl(),
    //   dateEnd: new FormControl(),
    //   firstname: new FormControl()
    // });
    // this.dateGroup = this.myFormGroup;

    this.dateTime = {
      firstname: "",
      expense: "",
      dateStart: "",
      dateEnd: ""
    }
    this.dateFormGroup = this.createStudentsForm();
  }

  createStudentsForm(): FormGroup {
    return this.formBuilder.group({
      firstname: [this.dateTime.firstname, Validators.required],
      expense: [this.dateTime.expense, Validators.required],
      dateStart: [this.dateTime.dateStart, Validators.required],
      dateEnd: [this.dateTime.dateEnd, Validators.required]

      // _id: [this.students._id],
      // class: [this.students.class, Validators.required],
      // room: [this.students.room],
      // studentid: [this.students.studentid, Validators.required],
      // prefix: [this.students.prefix, Validators.required],
      // firstname: [this.students.firstname, Validators.required],
      // lastname: [this.students.lastname, Validators.required],

      // identificationnumber: [this.students.identificationnumber,
      // [
      //   Validators.required,
      //   Validators.pattern("^[0-9]*$"),
      //   Validators.minLength(13),
      //   Validators.maxLength(13)
      // ]
      // ],

      // birthday: [this.students.birthday, Validators.required],
      // sex: [this.students.sex, Validators.required],
      // fatherfullname: [this.students.fatherfullname, Validators.required],
      // motherfullname: [this.students.motherfullname, Validators.required],
      // phonenumber: [this.students.phonenumber,
      // [
      //   Validators.required,
      //   Validators.pattern("^[0-9]*$"),
      //   Validators.minLength(10),
      //   Validators.maxLength(10)
      // ]
      // ],

    });
  }

  expense: any[] = [
    { name: 'หน่วยงานรัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานภาครัฐ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานรัฐวิสาหกิจ', sound: 'กลุ่ม/ฝ่าย!' },
    { name: 'หน่วยงานเอกชน', sound: 'กลุ่ม/ฝ่าย!' },
  ];

  //แบบนี้ก็ใช้ได้
  // myFormGroup: FormGroup = this.formBuilder.group({
  //   dateStart: ['', Validators.required],
  //   dateEnd: ['', Validators.required],
  //   name: ['', Validators.required]
  // });

  onsubmit() {
    console.log(this.dateFormGroup.value);
    this.clickFormSearch.emit(this.dateFormGroup.value);
  }

}
