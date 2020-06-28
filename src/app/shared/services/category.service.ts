import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  public getCategory() {
    return this.http.get<any>(`${this.apiUrl}/category`);
  }

  public addCategory(name: string) {
    return this.http.post<any>(`${this.apiUrl}/category`, {categoryName: name});
  }
}
