import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../../@core/data/categorias.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
})
export class CategoriaListComponent implements OnInit {
  categories: any;
  constructor(private categoriasService: CategoriasService) {}

  async ngOnInit() {
    // Aqui se llama al servicio de categorias
    this.categoriasService.getCategorias().subscribe((data) => {
      // console.log('Categories : ', data);
      this.categories = data;
    });
  }
}
