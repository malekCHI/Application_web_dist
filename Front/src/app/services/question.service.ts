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

  questions: any[] = [
    {
      id: 1,
      question: "Qu'est-ce que le harcèlement scolaire ?",
      options: [
        'Une pratique qui consiste à nuire, faire du mal ou blesser un camarade',
        'Une matière étudiée en classe',
        'Un auquel on joue dans la cour de récréation',
      ],
    },
    {
      id: 2,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
    {
      id: 3,
      question: "Qu'est-ce que le harcèlement scolaire ?",
      options: [
        'Une pratique qui consiste à nuire, faire du mal ou blesser un camarade',
        'Une matière étudiée en classe',
        'Un jeu auquel on joue dans la cour de récréation',
      ],
    },
    {
      id: 4,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
    {
      id: 5,
      question: "Qu'est-ce que le harcèlement scolaire ?",
      options: [
        'Une pratique qui consiste à nuire, faire du mal ou blesser un camarade',
        'Une matière étudiée en classe',
        'Un jeu auquel on joue dans la cour de récréation',
      ],
    },
    {
      id: 6,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
    {
      id: 7,
      question: "Qu'est-ce que le harcèlement scolaire ?",
      options: [
        'Une pratique qui consiste à nuire, faire du mal ou blesser un camarade',
        'Une matière étudiée en classe',
        'Un jeu auquel on joue dans la cour de récréation',
      ],
    },
    {
      id: 8,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
    {
      id: 9,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
    {
      id: 10,
      question: 'LE HARCELEMENT SCOLAIRE EST-IL GRAVE ?',
      options: [
        "Qui parce qu'il traumatise la victime a vie",
        'Oui parce que la victime peut mal réagir en se faisant du mal',
        'Non, le harcelement scolaire est bénin',
      ],
    },
  ];

  public addQuestion(
    question: Question,
    examId: number
  ): Observable<Question> {
    return this.http.post<Question>(`${this.apiserverUrl}/addQuestion/${examId}`,question);
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
