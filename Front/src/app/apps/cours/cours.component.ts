import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/model/Cours';
import { Specialite } from 'src/app/model/Specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent implements OnInit {
  public cours: Cours[] = [];
  id!: string;
  courss: Cours = new Cours();
  selectedSpecialiteId: any;
  closeResult: string | undefined;
  specilaite: Specialite = new Specialite();
  specilaiteItems: Specialite[] = [];

  constructor(
    private courseService: CoursService,
    private specialiteService: SpecialiteService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id); // This will log the id to the console
    });
    this.courseService.findCoursBySpecialite(this.id).subscribe({
      next: (data) => (this.cours = data), // code : 200 ,204
      error: (error) => console.log(error), // code : 500 ,404
      complete: () => console.log('I m finshsing'),
    });

    this.specialiteService.getSpecialite().subscribe({
      next: (data) => (this.specilaiteItems = data),
      error: (error) => console.log(error),
      complete: () => console.log('Finished fetching specialties'),
    });
  }

  /*  public addscours(): void {
    console.log('jjjj');

    this.courseService
      .createCoursandassinspecialit(this.courss, this.selectedSpecialiteId)
      .subscribe(
        (res: Cours) => {
          if (res) {
            console.log('Opération effectuée avec succès');
            this.router.navigate(['/cours']);
          }
        },
        (error: HttpErrorResponse) => {
          console.log('Opération non effectuée');
          console.error(error);
        }
      );
  } */

  public addscours(): void {
    console.log('jjjj');
    // Find the selected specialty
    const selectedSpecialite = this.specilaiteItems.find(
      (item) => item.id === this.selectedSpecialiteId
    );

    if (selectedSpecialite) {
      this.courss.specialite = selectedSpecialite;
    }

    // Proceed with creating the course
    this.courseService
      .createCoursandassinspecialit(this.courss, this.selectedSpecialiteId)
      .subscribe(
        (res: Cours) => {
          if (res) {
            console.log('Opération effectuée avec succès');
            this.router.navigate(['/cours']);
          }
          location.reload();
        },
        (error: HttpErrorResponse) => {
          console.log('Opération non effectuée');
          console.error(error);
        }
      );
  }

  // tslint:disable-next-line:typedef
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteCours(coursId: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.courseService.deleteCours(coursId).subscribe({
            next: (data) => console.log(data),
            error: (error) => console.log(error), // code : 500 ,404
            complete: () => console.log('I m finshsingggg'),
          });

          location.reload();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your vote is safe :)',
            'error'
          );
        }
      });
  }
}
