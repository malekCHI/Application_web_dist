import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: any;
  exams! : Exam;
  public examss : Exam[] = [];
  public exam: Exam = new Exam();

  constructor(private serviceExam: ExamService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // This will log the id to the console
    });
      this.serviceExam.getExamById(this.id).subscribe({
      next: (data)=>this.exams=data, //code : 200 ,204
      error : (error)=>console.log(error),// code : 500 ,404
      complete : ()=>console.log("I m finshsing")
    })
    //this.getReclamations();
  }

}
