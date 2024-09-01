import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FiltreleComponent} from "./filtrele.component";


@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: FiltreleComponent}])],
  exports: [RouterModule]
})
export class FiltreleRoutingModule {}
