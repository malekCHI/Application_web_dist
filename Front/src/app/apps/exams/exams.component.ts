import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { Question } from 'src/app/model/question';
import { ExamService } from 'src/app/services/exam.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  showPage: boolean = true;
  showQuiz: boolean = false;
  showListExam: boolean = false;
  searchQuery!:any;
  exam: Exam = new Exam(); 
  exams: Exam[] = [];





  constructor(private serviceExam :ExamService,
    private router: Router) { }

  ngOnInit(): void {
  }


  changeVue() {
    this.showPage = false;
    this.showQuiz = true;
  }

  public addExam(): void {
    this.serviceExam.addExam(this.exam).subscribe(
      (res: Exam) => {
        if (res) {
          console.log('Opération effectuée avec succès');
          this.showQuiz = false;
          this.showListExam = true;
          this.getAllExams()
          
        }
      },
      (error: HttpErrorResponse) => {
        console.log('Opération non effectuée');
        console.error(error);
      }
    );
  }
  
  changeVueToList(){
    this.showListExam = true;
  }
  private getAllExams() {
    this.serviceExam.getAllExams().subscribe(
      (response: Exam[]) => {
        // Réponse de l'API reçue avec succès
        this.exams = response; // Stockez les examens dans le tableau
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSearch() {
    const filteredexams = this.exams.filter(exam =>
    exam.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
    exam.description.toLowerCase().includes(this.searchQuery.toLowerCase())

  );
  if (filteredexams.length === 0) {
    this.exams = this.exams;
  } else {
    this.exams = filteredexams;
  }
}


filterByCategory(exams: Exam[], category: any): Exam[] {
  if (category) {
    return exams.filter((product) => product.examType === category);
  } else {
    return exams;
  }
}
  

 
  

}
