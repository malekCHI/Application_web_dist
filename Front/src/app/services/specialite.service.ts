import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialite } from '../model/Specialite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialiteService {
  private apiserverUrl = 'http://localhost:8086';
  constructor(private http: HttpClient) {}
  public addSpecialite(specialite: Specialite): Observable<Specialite> {
    return this.http.post<Specialite>(
      `${this.apiserverUrl}/addSpecialite`,
      specialite
    );
  }
  public getOneSpecialite(Id: any): Observable<Specialite> {
    return this.http.get<Specialite>(
      `${this.apiserverUrl}/getOneSpecialite/${Id}`
    );
  }
  public getSpecialite(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(`${this.apiserverUrl}/getSpecialite`);
  }
  public deleteSpecialite(Id: any): Observable<void> {
    return this.http.delete<void>(
      `${this.apiserverUrl}/deleteSpecialite/${Id}`
    );
  }


}
