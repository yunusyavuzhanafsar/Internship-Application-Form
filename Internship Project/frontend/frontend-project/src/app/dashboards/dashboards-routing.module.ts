import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {C1Component} from "./c1/c1.component";
import {AdminComponent} from "./admin/admin.component";
import {TableComponent} from "./table/table.component";
import {UserformComponent} from "./userform/userform.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FiltreleComponent} from "./filtrele/filtrele.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'',children:[
          { path: 'c1',title:"c1", component: C1Component },
          { path: 'admin',title:"c2", component: AdminComponent },
          { path: 'navbar',title:"c3", component: NavbarComponent },
          { path: 'userform',title:"c4", component: UserformComponent },
          { path: 'table',title:"Başvuru Listesi", component: TableComponent },
          { path: 'filtrele',title:"c6", component: FiltreleComponent },

        ]},
    ])
  ],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {}
