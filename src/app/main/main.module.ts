import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { VesselModule } from '../vessel/vessel.module';
import { TableModule } from '../table/table.module';
import { MyvesselModule } from '../myvessel/myvessel.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    VesselModule,
    TableModule,
    MyvesselModule
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
