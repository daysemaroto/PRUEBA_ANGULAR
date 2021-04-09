import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
    children: [
      {
        path: 'list',
        component: CategoriaListComponent,
      },
      {
        path: 'create',
        component: CategoriaCreateComponent,
      },
      {
        path: 'edit',
        component: CategoriaEditComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRoutingModule {}
