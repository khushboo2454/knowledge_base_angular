import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  categoryName:string;
  constructor(private categoryService: CategoryService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Create new category
  submitCategory() {
    this.categoryService.addCategory(this.categoryName)
    .subscribe(
        (res:any) => {
            this.router.navigate(['category']);
        },
        error => {
            this.toastr.error(error.error.message);
        });
  }

}
