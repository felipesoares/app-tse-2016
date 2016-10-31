import { Component } from '@angular/core';

import { PerfilEleitorado } from '../../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../../pages/candidatos-vereador/candidatos-vereador';

/*
  Generated class for the NavBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBar {

  perfilEleitorado = PerfilEleitorado;
  candidatosPrefeito = CandidatosPrefeito;
  candidatosVereador = CandidatosVereador;

  title: string;

  constructor() {
    console.log('Hello NavBar Component');
    this.title = 'TSE 2016';
  }

}
