import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/shared/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  categoryList:any[] = [];
  contentImageFile:File;
  imageUrl:string;

  constructor(private categoryService: CategoryService,
    private contentService: ContentService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
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

  // Submit content form and call create content api
  contentSubmit(data, form) {
    if(!form.valid) {
      return;
    }
    const fd = new FormData();
    fd.append('title', data.title);
    fd.append('description', data.description);
    fd.append('categoryId', data.category);
    fd.append('document', this.contentImageFile);
    
    this.contentService.addContent(fd).subscribe((res:any) => {
      if(res.success) {
        this.router.navigate(['content']);
        this.toastr.success('Category Added Successfully');
      }
    },
    (err)=> {
      this.toastr.error(err.error.message);
    });
  }

  //call when content file is selected 
  onFileSelected(event) {
    this.contentImageFile = event.target.files[0];
  }

}
