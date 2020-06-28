import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoaderComponent } from './loader/loader.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule,
        LoaderComponent,
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot({
        preventDuplicates: true,
        maxOpened: 1
        }),
        HttpClientModule,
        BrowserAnimationsModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        LoaderComponent
        ],
    providers: []
})
export class SharedModule { }
