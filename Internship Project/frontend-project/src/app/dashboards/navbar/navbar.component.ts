import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AdminComponent} from "../admin/admin.component";
import {MenubarModule} from "primeng/menubar";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {BadgeModule} from "primeng/badge";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {Button} from "primeng/button";
import {MenuItem} from "primeng/api";
import {Ripple} from "primeng/ripple";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    AdminComponent,
    MenubarModule,
    NgOptimizedImage,
    NgClass,
    BadgeModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    Button,
    NgIf,
    Ripple
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;
  adminDialogVisible = false;
  signupUsers: any[] = [];
  private deger: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    this.menu();

  }
  menu(){
    this.items = [
      {
        label: 'Ana Sayfa',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigateByUrl('/userform');
        }
      },



    ];
    if (this.signupUsers) {
      this.items.push({
        label: 'Tablo',
        icon: 'pi pi-table',
        command: () => {
          this.router.navigateByUrl('/table');
        }
      });
    }
    if (this.signupUsers) {
      this.items.push({
        label: 'Filtre',
        icon: 'pi pi-search',
        command: () => {
          this.router.navigateByUrl('/filtrele');
        }
      });
    }
  }



  onSignupUsersReceived(data: any) {
    this.signupUsers = data;
    if(data){
      this.menu()
    }
  }

  a(event: any) {
    console.log(event);
    this.deger.emit(this.signupUsers);
  }





}


