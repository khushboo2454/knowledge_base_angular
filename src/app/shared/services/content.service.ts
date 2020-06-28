import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  public getContent(query) {
    let url =`${this.apiUrl}/content?`;
    url = query ? `${this.apiUrl}/content?${query}` : url;
    return this.http.get<any>(url);
  }

  public addContent(data: any) {
    return this.http.post<any>(`${this.apiUrl}/content`, data);
  }
}
