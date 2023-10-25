import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../model/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiserverUrl='http://localhost:8086';
  constructor(private http: HttpClient) { }

public addExam(exam :Exam): Observable<Exam>{
    return this.http.post<Exam>(`${this.apiserverUrl}/addExam`,exam);
}
public getExamById(examId:number ): Observable<Exam>{
  return this.http.get<Exam>(`${this.apiserverUrl}/getExamById/${examId}`);
}
public updateExam(exam:number): Observable<Exam>{
  return this.http.patch<Exam>(`${this.apiserverUrl}/updateExam/`,exam);
}
public getAllExams(): Observable<Exam[]>{
  return this.http.get<Exam[]>(`${this.apiserverUrl}/allExams`)
}
public deleteExam(examId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/deleteExam/${examId}`);
}
}
