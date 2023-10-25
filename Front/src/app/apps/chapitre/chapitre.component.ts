import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapitre } from 'src/app/model/Chapitre';
import { Cours } from 'src/app/model/Cours';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CoursService } from 'src/app/services/cours.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css'],
})
export class ChapitreComponent implements OnInit {
  public chapitres: Chapitre[] = [];
  chapitre: Chapitre = new Chapitre();
  id!: string;
  cours: Cours = new Cours();
  coursItems: Cours[] = [];
  selectedcourseId: any;
  closeResult: string | undefined;

  constructor(
    private chapitreService: ChapitreService,
    private courseService: CoursService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id); // This will log the id to the console
    });
    this.chapitreService.getChapitresbyCoursid(this.id).subscribe({
      next: (data) => (this.chapitres = data), // code : 200 ,204
      error: (error) => console.log(error), // code : 500 ,404
      complete: () => console.log('I m finshsing'),
    });

    this.courseService.getCours().subscribe({
      next: (data) => (this.coursItems = data),
      error: (error) => console.log(error),
      complete: () => console.log('Finished fetching specialties'),
    });
  }

  public addchapitre(): void {
    console.log('jjjj');

    // Find the selected specialty
    const selectedSpecialite = this.coursItems.find(
      (item) => item.id === this.selectedcourseId
    );

    if (selectedSpecialite) {
      this.chapitre.cours = selectedSpecialite;
    }

    // Proceed with creating the course
    this.chapitreService
      .addChapitre(this.chapitre, this.selectedcourseId)
      .subscribe(
        (res: Chapitre) => {
          if (res) {
            console.log('Opération effectuée avec succès');
            this.router.navigate(['/chapitre']);
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

  /*  deleteChapitre(chapitreId: number): void {
    this.chapitreService.deleteChapitre(chapitreId).subscribe(
      () => {
        console.log('Chapitre deleted successfully');
        // Optionally, refresh the list of chapitres
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting chapitre', error);
      }
    );
  } */

  deleteChapitre(chapitreId: number): void {
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
          this.chapitreService.deleteChapitre(chapitreId).subscribe({
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

  markChapitreAsCompleted(id: number): void {
    this.chapitreService.markChapitreAsCompleted(id).subscribe(
      (response) => {
        console.log(response);
        location.reload();

        // Handle success here
      },
      (error) => {
        console.error(error);
        // Handle error here
      }
    );
  }
}
