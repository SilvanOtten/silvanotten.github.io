// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },
    {
        path: 'projects',
        loadChildren: './pages/projects/projects.module#ProjectsModule'
    },
    {
        path: '**',
        loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
