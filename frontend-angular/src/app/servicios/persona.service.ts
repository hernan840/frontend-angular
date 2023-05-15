import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url="http://localhost:8080/api/datospersonales";

  constructor(private http:HttpClient) { }

  public lista():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public delete(id: number):Observable<any>{
    //return this.http.delete<any>(this.url +'/'+id);
    return this.http.delete<any>(this.url+`/${id}`);
  }
  
  public save(persona: Persona):Observable<any>{
    return this.http.post<any>(this.url,persona);
  }
  
  public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`/${id}`);
  }

  public update(persona: any):Observable<any>{
    return this.http.put<any>(this.url,persona);
  }
}
