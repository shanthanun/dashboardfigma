import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'sidenav', loadChildren: () => import('./sidenav/sidenav.module').then(m => m.SidenavModule) },
{ path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
{ path: 'vessel', loadChildren: () => import('./vessel/vessel.module').then(m => m.VesselModule) },
{ path: 'myvessel', loadChildren: () => import('./myvessel/myvessel.module').then(m => m.MyvesselModule) },
{ path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
{ path: 'searchbox', loadChildren: () => import('./searchbox/searchbox.module').then(m => m.SearchboxModule) },
{ path: 'selectbox', loadChildren: () => import('./selectbox/selectbox.module').then(m => m.SelectboxModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
