import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VesselRoutingModule } from './vessel-routing.module';
import { VesselComponent } from './vessel.component';


@NgModule({
  declarations: [
    VesselComponent
  ],
  imports: [
    CommonModule,
    VesselRoutingModule
  ],
  exports:[VesselComponent],
})
export class VesselModule { }
