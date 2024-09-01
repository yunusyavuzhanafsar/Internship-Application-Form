import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {C1Component} from "./c1.component";

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: C1Component }])],
    exports: [RouterModule]
})
export class C1RoutingModule {}
