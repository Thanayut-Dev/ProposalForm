import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    SearchBoxComponent,
    SearchFormComponent
  ]
})
export class SearchModule { }
