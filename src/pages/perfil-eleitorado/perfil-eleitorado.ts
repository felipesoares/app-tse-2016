import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  selector: 'page-perfil-eleitorado',
  templateUrl: 'perfil-eleitorado.html'
})
export class PerfilEleitorado {

  param = { zona: 0, faixaEtaria: '', grauEscolaridade: '' }

  zonas: Array<{ value: number, text: string }> = [];

  constructor(public menu: MenuController, private http: Http) {

    this.menu.swipeEnable(true);
    this.http = http;

    this.zonas.push({ value: 1, text: '1' });
    this.zonas.push({ value: 2, text: '2' });
    this.zonas.push({ value: 3, text: '3' });

    this.param.zona = 1;
  }

  ionViewDidLoad() {
    console.log('Hello PerfilEleitorado Page');
  }

  consulta() {
    console.log("Consulta submetida");
    console.log(this.param);
  }

}
