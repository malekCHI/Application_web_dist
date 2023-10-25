import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapitre } from 'src/app/model/Chapitre';
import { ChapitreService } from 'src/app/services/chapitre.service';

@Component({
  selector: 'app-detail-chapitre',
  templateUrl: './detail-chapitre.component.html',
  styleUrls: ['./detail-chapitre.component.css'],
})
export class DetailChapitreComponent implements OnInit {
  chapitre!: Chapitre;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private chapitreService: ChapitreService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id); // This will log the id to the console
    });
    this.chapitreService.getOneChapitre(this.id).subscribe({
      next: (data) => (this.chapitre = data), // code : 200 ,204
      error: (error) => console.log(error), // code : 500 ,404
      complete: () => console.log('I m finshsing'),
    });
  }
}
