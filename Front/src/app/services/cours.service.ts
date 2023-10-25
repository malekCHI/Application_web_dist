import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../model/Cours';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  private apiserverUrl = 'http://localhost:8086';
  constructor(private http: HttpClient) {}
  public createCoursandassinspecialit(
    cours: Cours,
    specialiteId: number
  ): Observable<Cours> {
    return this.http.post<Cours>(
      `${this.apiserverUrl}/createCoursandassinspecialit/${specialiteId}`,
        cours

    );
  }
  public getOneCours(Id: any): Observable<Cours> {
    return this.http.get<Cours>(`${this.apiserverUrl}/getOneCours/${Id}`);
  }
  public getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiserverUrl}/getCours`);
  }
  public deleteCours(Id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiserverUrl}/deleteCours/${Id}`);
  }
  public findCoursBySpecialite(specialite: any): Observable<Cours[]> {
    return this.http.get<Cours[]>(
      `${this.apiserverUrl}/findCoursBySpecialite/${specialite}`
    );
  }
}
