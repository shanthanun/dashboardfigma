import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyvesselComponent } from './myvessel.component';

const routes: Routes = [{ path: '', component: MyvesselComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyvesselRoutingModule { }
