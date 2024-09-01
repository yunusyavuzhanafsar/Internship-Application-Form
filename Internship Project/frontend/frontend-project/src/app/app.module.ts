import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import { AdminRoutingModule } from './dashboards/admin/admin-routing.module';
import { TableRoutingModule } from './dashboards/table/table-routing.module';
import { NavbarRoutingModule } from './dashboards/navbar/navbar-routing.module';
import { UserformRoutingModule } from './dashboards/userform/userform-routing.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AdminRoutingModule,
    TableRoutingModule,
    NavbarRoutingModule,
    UserformRoutingModule,
    AppRoutingModule,


  ],
  providers: [],
})
export class AppModule { }
