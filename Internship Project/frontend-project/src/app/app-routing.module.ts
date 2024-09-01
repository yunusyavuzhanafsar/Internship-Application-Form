 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {C1Component} from "./dashboards/c1/c1.component";
import {AdminComponent} from "./dashboards/admin/admin.component";
import {NavbarComponent} from "./dashboards/navbar/navbar.component";
import {UserformComponent} from "./dashboards/userform/userform.component";
import {TableComponent} from "./dashboards/table/table.component";
 import {FiltreleComponent} from "./dashboards/filtrele/filtrele.component";



@NgModule({
  declarations: [],
  imports: [
   CommonModule, RouterModule.forChild([
      {path:'',children:[
          { path: 'c1',title:"c1", component: C1Component },
          { path: 'admin',title:"c2", component: AdminComponent },
          { path: 'navbar',title:"c3", component: NavbarComponent },
          { path: 'userform',title:"c4", component: UserformComponent },
          { path: 'table',title:"Başvuranların Listesi", component: TableComponent },
          { path: 'filtrele',title:"c6", component: FiltreleComponent },
        ]},
      { path: '**', redirectTo: '' }
    ])
  ],
})
export class AppRoutingModule { }
