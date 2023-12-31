import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ListComponent } from './exams/list-exam/list.component';
import { DetailsComponent } from './exams/details/details.component';
import { QuestionsComponent } from './questions/questions.component';
import { ListQuestionComponent } from './questions/list/list-question.component';
import { StartComponent } from './exams/quiz/start/start.component';
import { DetailChapitreComponent } from './detail-chapitre/detail-chapitre.component';
import { CoursComponent } from './cours/cours.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { ChapitreComponent } from './chapitre/chapitre.component';

@NgModule({
  declarations: [
    AppsComponent,

    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    EvenementComponent,
    ListComponent,
    DetailsComponent,
    QuestionsComponent,
    ListQuestionComponent,
    StartComponent,
    DetailChapitreComponent,
    CoursComponent,
    SpecialiteComponent,
    ChapitreComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
