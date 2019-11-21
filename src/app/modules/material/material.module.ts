import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormField,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule

  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormField,
    MatInputModule
  ]
})
export class MaterialModule { }
