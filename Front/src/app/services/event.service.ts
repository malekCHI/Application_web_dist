import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiserverUrl='http://localhost:8083/evenement';
  constructor(private http: HttpClient) { }


public addEvent(event :Event): Observable<Event>{
    return this.http.post<Event>(`${this.apiserverUrl}/createvent`,event);
}
public getEvent(eventId:number ): Observable<Event>{
  return this.http.get<Event>(`${this.apiserverUrl}/getevent/${eventId}`);
}
public getevnet(): Observable<Event[]>{
  return this.http.get<Event[]>(`${this.apiserverUrl}/getevent`)
}
public deleteevent(eventId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/deletevent/${eventId}`);
}
}