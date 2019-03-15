import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuTopComponent } from './navmenu-top/navmenu-top.component';
import { ViewPortfolioComponent } from './view-portfolio/view-portfolio.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { FooterComponent } from './footer/footer.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewResumeComponent } from './view-resume/view-resume.component';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuTopComponent,
    ViewPortfolioComponent,
    ViewAboutComponent,
    ViewContactComponent,
    ViewServicesComponent,
    FooterComponent,
    ViewHomeComponent,
    FormContactComponent,
    ViewResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
