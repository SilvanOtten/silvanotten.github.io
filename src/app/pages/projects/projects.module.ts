// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from 'src/app/components/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
