import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { promise } from 'selenium-webdriver';
import { Observable } from 'rxjs';
// import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  baseUrl = 'http://127.0.0.1:8000/productos/allcategorias';

  cate_1 = 'http://127.0.0.1:8000/static/images/categoria/';
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCategoria(id: string | number) {
    return this.http.get(`${this.cate_1}${id}`);
  }
}
