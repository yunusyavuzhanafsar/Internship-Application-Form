import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserformComponent} from "./userform.component";


@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: UserformComponent}])],
  exports: [RouterModule]
})
export class UserformRoutingModule {}
