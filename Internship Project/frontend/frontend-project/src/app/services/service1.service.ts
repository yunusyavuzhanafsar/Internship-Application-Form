import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
    upper(text:string){
      return text.toUpperCase();
    }
  constructor() { }
}
