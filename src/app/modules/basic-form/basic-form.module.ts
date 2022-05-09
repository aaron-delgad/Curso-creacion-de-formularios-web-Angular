import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form.component';
import { basicFormRouting } from './basic-form.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    basicFormRouting,
    ReactiveFormsModule
  ]
})
export class BasicFormModule { }
