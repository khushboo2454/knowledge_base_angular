import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { ListContentComponent } from './list-content/list-content.component';


const routes: Routes = [
  {
    path: 'create',
    component: AddContentComponent
  },
  {
    path: '',
    component: ListContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
