import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblogService } from '../blog/blog-service.service';
import { Blog } from '../blog/blog-type';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  id: any;
  blogDetail: Blog | null = null;

  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router) { }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0]
  }

}
