import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  question: Question = new Question(); 
  questions: Question[] = [];
  searchQuery!:any;
  questionToDelete: any; 

  constructor(private serviceQuestion: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  
  private getAllQuestions() {
    this.serviceQuestion.getAllQuestions().subscribe(
      (response: Question[]) => {
        this.questions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSearch() {
    const filteredexams = this.questions.filter(quest =>
    quest.texte.toLowerCase().includes(this.searchQuery.toLowerCase())

  );
  if (filteredexams.length === 0) {
    this.questions = this.questions;
  } else {
    this.questions = filteredexams;
  }
}



deleteQuestion(examId: any): void {
  this.serviceQuestion.deleteQuestion(examId).subscribe(
    () => {
      console.log('L\'examen a été supprimé avec succès.');

      // Rechargez la page après la suppression
      window.location.reload();
    },
    (error) => {
      console.error('Erreur lors de la suppression de l\'examen.');
    }
  );
}

}
