import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchboxRoutingModule } from './searchbox-routing.module';
import { SearchboxComponent } from './searchbox.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    SearchboxRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports:[SearchboxComponent]
})
export class SearchboxModule { }
