import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { AddContentComponent } from './add-content/add-content.component';
import { ListContentComponent } from './list-content/list-content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddContentComponent, ListContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class ContentModule { }
