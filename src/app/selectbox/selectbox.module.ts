import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectboxRoutingModule } from './selectbox-routing.module';
import { SelectboxComponent } from './selectbox.component';


@NgModule({
  declarations: [
    SelectboxComponent
  ],
  imports: [
    CommonModule,
    SelectboxRoutingModule
  ],
  exports:[SelectboxComponent]
})
export class SelectboxModule { }
