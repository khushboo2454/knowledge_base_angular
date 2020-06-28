import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcat',
  templateUrl: './listcat.component.html',
  styleUrls: ['./listcat.component.css']
})
export class ListcatComponent implements OnInit {

  categoryList:any[] = [];

  constructor(private categoryService: CategoryService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  // Get All gategory from database
  getCategory() {
    this.categoryService.getCategory()
    .subscribe(
        (res:any) => {
            this.categoryList = res.result;
        },
        error => {
            this.toastr.error(error.error.message);
        });
  }
}
