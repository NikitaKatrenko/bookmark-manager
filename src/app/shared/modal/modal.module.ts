import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserModule,
    MatSelectModule
  ],
})
export class ModalModule {}
