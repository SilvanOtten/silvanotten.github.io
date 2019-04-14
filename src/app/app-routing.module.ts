// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
