// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { SpotlightComponent } from 'src/app/components/spotlight/spotlight.component';
import { EducationRowComponent } from 'src/app/education-row/education-row.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    EducationRowComponent,
    SpotlightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: []
})
export class HomeModule { }
