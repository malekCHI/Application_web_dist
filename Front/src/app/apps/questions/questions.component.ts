import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { Question } from 'src/app/model/question';
import { ExamService } from 'src/app/services/exam.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  showPage: boolean = true;
  showQuestion: boolean = true;
  showListQustion: boolean = false;
  searchQuery!:any;
  question: Question = new Question();
  questions: Question[] = [];
  exams: Exam[] = [];

  exam: Exam = new Exam();
  examItems: Exam[] = [];
  selectedExamId: any;


  selectedExam!: Exam; // Pour stocker l'examen sélectionné
  successMessage!: string;
  errorMessage!: string;





  constructor(private serviceQuestion :QuestionService,
    private router: Router,
    private serviceExam: ExamService) { }

  ngOnInit(): void {
    //this.addQuestion();
    //this.getAllExams();

    this.serviceExam.getAllExams().subscribe({
      next: (data) => (this.examItems = data),
      error: (error) => console.log(error),
      complete: () => console.log('Finished fetching'),
    });

  }

  public addQuestion(): void {
    console.log("teeest");

    // Find the selected specialty
    const selectedExam = this.examItems.find(
      (item) => item.idE === this.selectedExamId
    );

    if (selectedExam) {
      this.question.exam = selectedExam;
    }
    console.log(this.question);
    // Proceed with creating the course
    this.serviceQuestion.addQuestion(this.question, this.selectedExamId)
  .subscribe(
    (res: Question) => {
      console.log('Operation successful');
      location.reload();
    },
    (error: HttpErrorResponse) => {
      console.error('Operation failed:', error);
    }
  );

  }

  /*addQuestion() {
    if (this.selectedExam) {
      this.exam = this.selectedExam; // Associez la question à l'examen sélectionné
      this.serviceQuestion.addQuestion(this.question, this.selectedExam.idE).subscribe(
        (response) => {
          console.log('Question added successfully:', response);
          this.successMessage = 'Question added to the exam successfully.';
          this.errorMessage = ''; // Clear any previous error message
        },
        (error) => {
          console.error('Failed to add question:', error);
          this.errorMessage = 'Failed to add the question to the exam.';
          this.successMessage = ''; // Clear any previous success message
        }
      );
    } else {
      this.errorMessage = 'Please select an exam to add the question to.';
    }
  }*/


  

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
  changeVueToList(){
    this.showListQustion = true;
  }

  changeVue() {
    this.showQuestion = false;
  }

 




}
