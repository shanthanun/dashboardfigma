import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { MainModule } from '../main/main.module';
import { SelectboxModule } from '../selectbox/selectbox.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MainModule,SelectboxModule
  ],
  exports: [SidenavComponent],
})
export class SidenavModule { }
