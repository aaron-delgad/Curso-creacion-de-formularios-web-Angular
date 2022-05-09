import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'basicForm', pathMatch: 'full'
  },
{
  path: 'basicForm',
  loadChildren: () => import('./modules/basic-form/basic-form.module').then(m =>m.BasicFormModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
