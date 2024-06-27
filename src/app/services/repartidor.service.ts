import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { EstadoModel } from '../models/catalogos/estado-model';
import { CreateClienteModel } from '../models/clientes/create-cliente-model';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  service:string = 'Repartidor';


  constructor(private http:HttpClient, private cookieService: CookieService) { }

  Create(request:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseUrl}/api/${this.service}/CrearRepartidor`,request);
  }

  GetRepartidor():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiBaseUrl}/api/${this.service}/GetRepartidores`);
  }

  Update(id:string, request:any):Observable<any>{
    return this.http.put<any>(`${environment.apiBaseUrl}/api/${this.service}/${id}`,request);
  }
}