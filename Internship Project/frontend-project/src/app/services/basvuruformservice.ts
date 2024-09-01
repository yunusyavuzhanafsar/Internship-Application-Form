import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SorguParametre} from "../dashboards/parametre/sorguparametre";




@Injectable()

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
    return '/basvuru';
  }

  filtre(request: SorguParametre) {
    return this.getHttp().post<any[]>(this.getBaseUrl() + this.getEntityName() + '/filtre', request);
  }

}
