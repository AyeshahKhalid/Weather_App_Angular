import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { StateUtils } from '../../state-utils';
@Component({
  selector: 'app-modal-window',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogActions,
    MatSelectModule,
    NgIf,
  ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss',
})
export class ModalWindowComponent {
  forecastForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    private stateUtils: StateUtils,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.forecastForm = new FormGroup({
      chart_name: new FormControl(this.data?.astro?.moon_phase, [
        Validators.required,
      ]),
      chart_type: new FormControl(this.data?.chart_type, [Validators.required]),
      chart_color: new FormControl(this.data?.chart_color, [
        Validators.required,
      ]),
    });
  }
  updateForecast() {
    if (this.forecastForm.valid) {
      const updatedData = { ...this.data, ...this.forecastForm.value };
      this.stateUtils.updateChart(updatedData);
      this.dialogRef.close();
    }
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
