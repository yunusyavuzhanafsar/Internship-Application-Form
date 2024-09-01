import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {DropdownModule} from "primeng/dropdown";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {C1RoutingModule} from "./c1-routing.module";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  standalone:true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet,
    DropdownModule,
    MenubarModule,
    C1RoutingModule
  ],
  styleUrl: './c1.component.css'
})
export class C1Component implements OnInit {
  aranan: any;
  cities: any[] | undefined;
  items: MenuItem[] | undefined;
  selectedCity: any | undefined;
  constructor( private router: Router) {
  }

  ngOnInit() {
    console.log("deneme");
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command:()=>{
          this.router.navigateByUrl('/deneme2');
        }
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }

  deneme(aranan:any) {
    console.log(aranan)
    console.log(this.aranan)
  }
}
