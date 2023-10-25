import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { DepartementComponent } from './departement/departement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ExamsComponent } from './exams/exams.component';
import { ListComponent } from './exams/list-exam/list.component';
import { DetailsComponent } from './exams/details/details.component';
import { QuestionsComponent } from './questions/questions.component';
import { ListQuestionComponent } from './questions/list/list-question.component';
import { StartComponent } from './exams/quiz/start/start.component';

import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { CoursComponent } from './cours/cours.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { DetailChapitreComponent } from './detail-chapitre/detail-chapitre.component';
import { SpecialiteComponent } from './specialite/specialite.component';


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
      { path: 'examen', component: ExamsComponent },
      { path: 'exam-list', component: ListComponent },
      { path: 'detail-exam/:id', component: DetailsComponent },
      { path: 'question-add', component: QuestionsComponent },
      { path: 'question-list', component: ListQuestionComponent },
      { path: 'quiz-start', component: StartComponent },
      { path: 'post', component: PostsListComponent },
      { path: 'post/:id', component: PostDetailsComponent },
      { path: 'cours/:id', component: CoursComponent },
      { path: 'chapitre/:id', component: ChapitreComponent },
      { path: 'detail-chapitre/:id', component: DetailChapitreComponent },
      { path: 'specialite', component: SpecialiteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
