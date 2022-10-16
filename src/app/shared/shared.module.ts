import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const sharedModule = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule];

@NgModule({
  declarations: [],
  imports: [
    ...sharedModule
  ],
  exports: [
    ...sharedModule
  ]
})
export class SharedModule { }
