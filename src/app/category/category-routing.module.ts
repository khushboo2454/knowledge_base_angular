import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcatComponent } from './addcat/addcat.component';
import { ListcatComponent } from './listcat/listcat.component';


const routes: Routes = [
  {
    path: 'create',
    component: AddcatComponent
  },
  {
    path: '',
    component: ListcatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
