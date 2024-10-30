import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { AboutComponent } from './componants/about/about.component';
import { ProjectsComponent } from './componants/projects/projects.component';
import { DetailProjectComponent } from './componants/detail-project/detail-project.component';
import { BlogComponent } from './componants/blog/blog.component';
import { ContactComponent } from './componants/contact/contact.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    DetailProjectComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
