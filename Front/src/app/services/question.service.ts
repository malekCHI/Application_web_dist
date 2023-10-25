import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiserverUrl='http://localhost:8086';
  constructor(private http: HttpClient) { }

public addQuestion(question :Question): Observable<Question>{
    return this.http.post<Question>(`${this.apiserverUrl}/addQuestion`,question);
}
public getQuestionById(questionId:number ): Observable<Question>{
  return this.http.get<Question>(`${this.apiserverUrl}/getQuestionById/${questionId}`);
}
public updateQuestion(question:number): Observable<Question>{
  return this.http.patch<Question>(`${this.apiserverUrl}/updateQuestion/`,question);
}
public getAllQuestions(): Observable<Question[]>{
  return this.http.get<Question[]>(`${this.apiserverUrl}/allQuestions`)
}
public deleteQuestion(questionId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/deleteExam/${questionId}`);
}
}
