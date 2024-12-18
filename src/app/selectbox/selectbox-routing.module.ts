import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectboxComponent } from './selectbox.component';

const routes: Routes = [{ path: '', component: SelectboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectboxRoutingModule { }
