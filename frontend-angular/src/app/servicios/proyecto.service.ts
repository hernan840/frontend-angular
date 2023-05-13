import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url="http://localhost:8080/api/proyectos";

  constructor(private http:HttpClient) { }

  public lista():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public delete(id: number):Observable<any>{
    //return this.http.delete<any>(this.url +'/'+id);
    return this.http.delete<any>(this.url+`/${id}`);
  }
  
  public save(proyecto: Proyecto):Observable<any>{
    return this.http.post<any>(this.url,proyecto);
  }
  
  public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`/${id}`);
  }

  public update(proyecto: any):Observable<any>{
    return this.http.put<any>(this.url,proyecto);
  }
}
