import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {NgIf} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {BasvuruFormService} from "../../services/basvuruformservice";
import {SorguParametre} from "../parametre/sorguparametre";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-filtrele',
  standalone: true,
  imports: [
    Button,
    PaginatorModule,
    NgIf,
    InputTextModule,
    TableModule,
    HttpClientModule,

  ],
  templateUrl: './filtrele.component.html',
  styleUrl: './filtrele.component.css',
  providers:[BasvuruFormService]
})
export class FiltreleComponent {
  constructor(private basvuruformservice:BasvuruFormService) {
  }
  parametre=new SorguParametre()
  gelenVeriList:any[ ]=[];
  showTable: boolean = false;
  showFilter: boolean = true;

  confirm1(){
    this.basvuruformservice.filtre(this.parametre).subscribe((data:any)=>{
      console.log(data)
      this.gelenVeriList =data;
      if(data.length > 0){
        this.showTable = true;
        this.showFilter =false;
      }else{
        this.showTable=false
      }
    })

  }

  showFilterForm() {
    this.showFilter = true;
    this.showTable = false; // Tabloyu gizle
  }
  goBack() {
    this.showFilter = true;
    this.showTable = false;
  }

}
