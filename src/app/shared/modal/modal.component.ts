import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { modalDataModel } from '../models/bookmark.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: modalDataModel) {
                this.modalForm = this.fb.group({
                  name: [this.data.name, Validators.required],
                  url: [this.data.url, [Validators.required,
                    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
                  group: [this.data.group, Validators.required]
                });
              }

  save(): void {
    const {value, valid} = this.modalForm;
    const id = this.data.id;
    if (valid) {
        this.dialogRef.close({id, ...value});
    }
  }

  decline(): void {
    this.dialogRef.close();
  }

}
