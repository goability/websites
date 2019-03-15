import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPortfolioComponent } from './view-portfolio/view-portfolio.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewResumeComponent } from './view-resume/view-resume.component'

const routes: Routes = [
  { path: '', component: ViewHomeComponent},
  { path: 'portfolio', component: ViewPortfolioComponent},
  { path: 'services', component: ViewServicesComponent},
  { path: 'contact', component: ViewContactComponent},
  { path: 'about', component: ViewAboutComponent},
  { path: 'resume', component: ViewResumeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
