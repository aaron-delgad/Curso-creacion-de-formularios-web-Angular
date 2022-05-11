import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./category-list/category-list.module').then(m => m.CategoryListModule)
  },
  {
    path: 'categoryForm',
    loadChildren: () => import('./category-form/category-form.module').then(m =>m.CategoryFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
