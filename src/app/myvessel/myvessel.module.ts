import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyvesselRoutingModule } from './myvessel-routing.module';
import { MyvesselComponent } from './myvessel.component';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { SelectboxComponent } from '../selectbox/selectbox.component';
import { SelectboxModule } from '../selectbox/selectbox.module';


@NgModule({
  declarations: [
    MyvesselComponent
  ],
  imports: [
    CommonModule,
    MyvesselRoutingModule,
    SearchboxModule,
    SelectboxModule
  ],
  exports : [MyvesselComponent]
})
export class MyvesselModule { }
