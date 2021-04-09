import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  { path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
