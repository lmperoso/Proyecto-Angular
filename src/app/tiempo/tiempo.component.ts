import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
  ciudad = 'Madrid';
  listaTiempo;

  constructor( public tiempo: ClientesService) {
    this.datosTiempo();
  }

  ngOnInit(): void {
  }
  datosTiempo() {
    this.tiempo.pedirTiempo(this.ciudad).subscribe(
      response => {
        console.log(response);
        this.listaTiempo = response;
        console.log(this.listaTiempo);
      }
    );
  }

}