import{ HttpClient } from '@angular/common/http';
import {AuthRequest} from "../dashboards/parameters/authRequest.model";
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService{
  constructor(private http: HttpClient){
  }

  getHttp(): HttpClient{
    return this.http;
  }
  getBaseUrl(): string{
    return "http://localhost:8080";
  }

  getEntityName():string{
    return '/api'
  }

  kaydet(request:AuthRequest) {
    return this.getHttp().post<any[] > (this.getBaseUrl() + this.getEntityName() + '/auth', request);

  }



}
