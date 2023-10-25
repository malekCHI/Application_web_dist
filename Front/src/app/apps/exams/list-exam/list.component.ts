import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  exam: Exam = new Exam(); 
  exams: Exam[] = [];
  searchQuery!:any;
  examToDelete: any; 


  constructor(private serviceExam: ExamService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllExams();
  }

  
  private getAllExams() {
    this.serviceExam.getAllExams().subscribe(
      (response: Exam[]) => {
        this.exams = response;
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


deleteExam(examId: any): void {
  this.serviceExam.deleteExam(examId).subscribe(
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
