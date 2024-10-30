import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { DetailProjectComponent } from './componants/detail-project/detail-project.component';
import { ContactComponent } from './componants/contact/contact.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { AboutComponent } from './componants/about/about.component';
import { ProjectsComponent } from './componants/projects/projects.component';
import { BlogComponent } from './componants/blog/blog.component';

const routes: Routes = [
  {path: "", component :HomeComponent},
  {path: "home",component:HomeComponent},
  {path: "about",component:AboutComponent},
  {path: "projects",component:ProjectsComponent},
  {path: "detail-project",component:DetailProjectComponent},
  {path: "blog",component:BlogComponent},
  {path: "contact",component:ContactComponent},
  {path: "**",component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
