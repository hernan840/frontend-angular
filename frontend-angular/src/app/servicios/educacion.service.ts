import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url="http://localhost:8080//api/educaciones";

  constructor(private http:HttpClient) { }

  public lista():Observable<any>{
    return this.http.get<any>(this.url);
  }

  public delete(id: number):Observable<any>{
    //return this.http.delete<any>(this.url +'/'+id);
    return this.http.delete<any>(this.url+`/${id}`);
  }
  
  public save(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.url,educacion);
  }
  
  public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`/${id}`);
  }

  public update(educacion: any):Observable<any>{
    return this.http.put<any>(this.url,educacion);
  }
}
