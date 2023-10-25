import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapitre } from '../model/Chapitre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChapitreService {
  private apiserverUrl = 'http://localhost:8086';
  constructor(private http: HttpClient) {}
  public addChapitre(
    chapitre: Chapitre,
    coursId: number
  ): Observable<Chapitre> {
    return this.http.post<Chapitre>(
      `${this.apiserverUrl}/createChapitreandassigntocours/${coursId}`,
      chapitre
    );
  }
  public getOneChapitre(Id: any): Observable<Chapitre> {
    return this.http.get<Chapitre>(`${this.apiserverUrl}/getOneChapitre/${Id}`);
  }
  public getChapitre(): Observable<Chapitre[]> {
    return this.http.get<Chapitre[]>(`${this.apiserverUrl}/getChapitre`);
  }
  public deleteChapitre(Id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiserverUrl}/deleteChapitre/${Id}`);
  }
  public getChapitresbyCoursid(cours: any): Observable<Chapitre[]> {
    return this.http.get<Chapitre[]>(
      `${this.apiserverUrl}/getChapitresbyCoursid/${cours}`
    );
  }

  markChapitreAsCompleted(id: number): Observable<Chapitre> {
    return this.http.post<Chapitre>(
      `${this.apiserverUrl}/markChapitreAsCompleted/${id}`,
      {}
    );
  }
}
