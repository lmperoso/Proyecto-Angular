import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { TiempoComponent } from './tiempo/tiempo.component';


const rutas: Routes = [
  { path: 'pie', component: PieComponent },
  { path: 'cabecera', component: CabeceraComponent },
  { path: 'tiempo', component: TiempoComponent },
  { path: 'cuerpo', component:  CuerpoComponent },
  { path: '**', component:  CuerpoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),//nombre del const Router
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
