import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchData: any = {
    startDate: null,
    endDate: null,
    firstname: "",
    lastname: "",
    nickname: ""
  };

  dataSource: any = [];

  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'nickname'];

  @Input() startDateLabel: any;
  @Input() endDateLabel: any;

  @Output() clickSearch = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dataSource = [
      {
        position: "1",
        firstname: "dd",
        lastname: "mm",
        nickname: "yyyy"
      },
      {
        position: "2",
        firstname: "dd",
        lastname: "mm",
        nickname: "yyyy"
      }
    ]
  }

  onSearchclick() {
    console.log(this.searchData);
    this.clickSearch.emit(this.searchData);
  }

}
