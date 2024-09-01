import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenubarModule } from "primeng/menubar";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Button } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { RouterLink } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AdminService } from "../../services/admin.service";
import { FormsModule } from "@angular/forms";
import { AuthRequest } from "../parameters/authRequest.model";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  imports: [
    MenubarModule,
    NgOptimizedImage,
    Button,
    DialogModule,
    InputTextModule,
    RouterLink, HttpClientModule, FormsModule, NgClass, ToastModule,
  ],
  selector: 'app-admin',
  standalone: true,
  styleUrls: ['./admin.component.css'],
  templateUrl: './admin.component.html',
  providers: [AdminService,  MessageService]
})
export class AdminComponent implements OnInit {

  @Input() signupUsers: any[] = [];
  @Output() deger: EventEmitter<any> = new EventEmitter();

  signupObj: any = {
    username: '',
    password: ''
  };

  showPassword: boolean = false;
  private messageService: any;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  request = new AuthRequest();
  visible: boolean | any;


  constructor(private adminservice: AdminService, messageService: MessageService) {
    this.messageService = messageService;
  }


  showDialog(event: MouseEvent) {
    this.visible = true;
    const button = event.target as HTMLElement;
    const dialog = document.querySelector('.custom-dialog') as HTMLElement;

    if (dialog && button) {
      const rect = button.getBoundingClientRect();
      dialog.style.top = `${rect.bottom + window.scrollY}px`;
      dialog.style.left = `${rect.left + window.scrollX}px`;
    }
  }

  closeDialog() {
    this.visible = false;
  }

  ngOnInit() {
    let localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
      this.deger.emit(this.signupUsers);
    }

    console.log('AdminComponent received:', this.signupUsers);
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    this.deger.emit(this.signupUsers);

    this.signupObj = {
      username: '',
      password: ''
    };
  }

  kayit() {
    this.adminservice.kaydet(this.request).subscribe(
      (data: any) => {
        localStorage.setItem('signUpUsers', JSON.stringify(data.accessToken));
        this.messageService.add({severity:'success', summary: 'Başarılı', detail: 'Giriş Başarılı'});
        console.log('kayıt oldu');
      },
      (error: any) => {
        this.messageService.add({severity:'error', summary: 'Hata', detail: 'Hatalı şifre'});
        console.log('hatalı şifre');
      }
    );
  }
}
