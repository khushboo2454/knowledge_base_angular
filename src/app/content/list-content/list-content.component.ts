import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/services/content.service';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {

  contentList:any[] = [];
  searchKey:string = null;
  selectedCategory:number;
  categoryList:any[] = [];

  constructor(private contentService: ContentService,
    private categoryService: CategoryService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getContent();
    this.getCategory();
  }

  // Get content all list 
  getContent() {
    let queryParams = {key: this.searchKey, catId: this.selectedCategory};
    let query;
    Object.keys(queryParams).map(key => {
      if (queryParams[key] !== undefined && queryParams[key]) {
          query += `&${key}=${queryParams[key]}`;
      }
    });
    this.contentService.getContent(query)
    .subscribe(
        (res:any) => {
            this.contentList = res.result;
        },
        error => {
            this.toastr.error(error.error.message);
        });
  }

  //Get All category 
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
