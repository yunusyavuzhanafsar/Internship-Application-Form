import { Component } from '@angular/core';

import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css',
})
export class AnasayfaComponent {

}
