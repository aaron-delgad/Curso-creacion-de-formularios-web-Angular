import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Category } from './../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly httpCliente: HttpClient) { }

  getAllCategories() {
    return this.httpCliente.get<Category[]>(`${environment.url_api}/categories/`);
  }

  createCategory(data: Partial<Category>) {
    return this.httpCliente.post<Category>(`${environment.url_api}/categories/`,data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.httpCliente.put<Category>(`${environment.url_api}/categories/${id}`, data);
  }
}
