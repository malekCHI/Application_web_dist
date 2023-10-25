import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Specialite } from 'src/app/model/Specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css'],
})
export class SpecialiteComponent implements OnInit {
  public specialite: Specialite[] = [];
  closeResult: string | undefined;
  form = false;

  specialitee: Specialite = new Specialite();

  constructor(
    private specialiteService: SpecialiteService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getSpecialite();
  }

  public getSpecialite(): void {
    this.specialiteService.getSpecialite().subscribe(
      (response: Specialite[]) => {
        this.specialite = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addspecialite(): void {
    console.log('jjjj');
    this.specialiteService.addSpecialite(this.specialitee).subscribe(
      (res: Specialite) => {
        if (res) {
          console.log('Opération effectuée avec succès');
          this.router.navigate(['/specialite']).then(() => {
            window.location.reload();
          });
        }
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

  deleteSpecialits(specialiteId: number): void {
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
          this.specialiteService.deleteSpecialite(specialiteId).subscribe({
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
