import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblogService } from '../blog/blog-service.service';
import { Blog } from '../blog/blog-type';
import { DepartementService } from 'src/app/services/departement.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Departement } from 'src/app/model/departement';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  showDepartmentForm = false;
  departements:any
  isActive: boolean = false;
  departement!:Departement;
  

  constructor(private depserv: DepartementService) {
    this.departement ={
      id: 0,
      name: "",
      active: false,
      stats: 0,
      head: "",
      description : ""

    }
   }

  ngOnInit(): void {
    this.getDeps();
    this.showDepartmentForm = false;
  }
  

deleteDep(idEvent : any){
  this.depserv.deleteDep(idEvent).subscribe(() => this.getDeps())
  location.reload();
  }
  public getDeps():void{
    this.depserv.getDeps().subscribe(  
      (response : Departement[]) =>{
        this.departements=response
        console
        console.log(response)
      },(error :HttpErrorResponse)=>{
        alert(error.message);
      });

}
toggleDepartmentForm() {
  this.showDepartmentForm = !this.showDepartmentForm;
}
addDepartment(dep:any) {
  this.depserv.addDep(dep).subscribe(() => {
    this.getDeps();
    this.showDepartmentForm = false;
  });
  
}

}
