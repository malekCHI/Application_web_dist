import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiserverUrl='http://localhost:8083/depatments';
  constructor(private http: HttpClient) { }

  public addDep(dep :Departement): Observable<Departement>{
    return this.http.post<Departement>(`${this.apiserverUrl}/addep`,dep);
}
public getDep(depId:number ): Observable<Departement>{
  return this.http.get<Departement>(`${this.apiserverUrl}/retrieve/${depId}`);
}
public getDeps(): Observable<Departement[]>{
  return this.http.get<Departement[]>(`${this.apiserverUrl}/retrieve`)
}
public deleteDep(depId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/deletedep/${depId}`);
}
}
