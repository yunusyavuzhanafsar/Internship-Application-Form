import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BasvuruFormRequest} from "../Request/BasvuruFormRequest";
import {Durumlar} from "../enum/Durumlar";



@Injectable({
  providedIn: 'root'
})
export class BasvuruFormService {

  constructor(private http: HttpClient) {
  }
  getHttp(): HttpClient {
    return this.http;
  }
  getBaseUrl(): string {
    return "http://localhost:8080";
  }
  getEntityName(): string {
    return `/basvuru`;
  }
  kaydet(request: BasvuruFormRequest){
    return this.getHttp().post<any[]>(this.getBaseUrl() + this.getEntityName() + `/save` ,request);
  }
  getAll() {
    return this.http.get<any>(this.getBaseUrl() + this.getEntityName() + '/getall');
  }
  updateStatus(id: number,durum: Durumlar ) {
    let request = {
      id: id,
      durum: durum
    };
    return this.http.put(this.getBaseUrl() + this.getEntityName() + '/updateStatus', request);
  }

}
