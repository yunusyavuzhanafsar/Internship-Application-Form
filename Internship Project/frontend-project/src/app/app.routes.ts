import { Routes } from '@angular/router';
import {C1Component} from "./dashboards/c1/c1.component";
import {AnasayfaComponent} from "./dashboards/anasayfa/anasayfa.component";

export const routes: Routes = [
  {
      path: '',component: AnasayfaComponent,
    children: [
      {path: '', data: {breadcrumb: ''}, loadChildren: () => import('./dashboards/dashboards.module').then((m) => m.DashboardsModule)},
    ]
  },

];
