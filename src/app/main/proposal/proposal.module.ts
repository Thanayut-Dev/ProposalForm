import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalFormComponent } from './proposal-form/proposal-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatTableModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ProposalFormComponent
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
    ProposalFormComponent
  ]
})
export class ProposalModule { }
