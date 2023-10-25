import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { DepartementComponent } from './departement/departement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostDetailsComponent } from '../post-details/post-details.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'departement', component: DepartementComponent },
      { path: 'evenement', component: EvenementComponent },
      { path: 'post', component: PostsListComponent },
      { path: 'post/:id', component: PostDetailsComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
