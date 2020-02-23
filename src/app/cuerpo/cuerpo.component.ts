import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  listaAjax;
  categoria = "general";

  @Output()//llamamos eventos
  evento = new EventEmitter<string>();

  constructor(public ajax: ClientesService) {
    this.dotosAjax();
  }

  ngOnInit(): void {
  }
  dotosAjax() {
    this.ajax.peticionArticulos(this.categoria).subscribe(
      response => {
        this.listaAjax = response;
        this.listaAjax = this.listaAjax.articles;
      }
    );
  }


}
