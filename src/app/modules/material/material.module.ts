import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatGridListModule, MatIconModule, MatTableModule, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule

  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule
  ]
})
export class MaterialModule { }
