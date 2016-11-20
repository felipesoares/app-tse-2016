// importa as libs necessárias
import { Component } from '@angular/core';

// importa os services utilizados
import { DataCandidatos } from '../../providers/data-candidatos';

// define o template html da página
@Component({
  selector: "page-candidatos-vereador",
  templateUrl: "candidatos-vereador.html"
})
export class CandidatosVereador {

  // declaração e inicialização das variáveis
  cidades = [];
  grausEscolaridade = [];
  sexos = [];
  partidos = [];

  candidatos = [];
  params = { cidade: '41998', cargo: 13, grausEscolaridade: [], sexos: [], partidos: [] }

  // construtor
  constructor(private _candidatos: DataCandidatos) {
    // chamada de métodos iniciais
    this.getCidades();
    this.getGrausEscolaridade();
    this.getSexos();
    this.getPartidos();
    this.consulta();
  }

  // método responsável por chamar o service que busca as cidades e preenche o respectivo combo-box
  getCidades() {
    this._candidatos.getCidades().subscribe(
      data => {
        this.cidades = data;
      },
      err => { }
    );
  }

  // método responsável por chamar o service que busca os graus de escolaridade e preenche o respectivo combo-box
  getGrausEscolaridade() {
    this._candidatos.getGrausEscolaridade().subscribe(
      data => {
        this.grausEscolaridade = data;
      },
      err => { }
    );
  }

  // método responsável por chamar o service que busca os sexos e preenche o respectivo combo-box
  getSexos() {
    this._candidatos.getSexos().subscribe(
      data => {
        this.sexos = data;
      },
      err => { }
    );
  }

  // método responsável por chamar o service que busca os partidos e preenche o respectivo combo-box
  getPartidos() {
    this._candidatos.getPartidos().subscribe(
      data => {
        this.partidos = data;
      },
      err => { }
    );
  }

  // método responsável por chamar o service que busca os candidatos de acordo com os parâmetros informados
  getCandidatos(cidade: string, cargo = null, grausEscolaridade = [], sexos = [], partidos = []) {
    this._candidatos.getCandidatos(cidade, cargo, grausEscolaridade, sexos, partidos).subscribe(
      data => {
        this.candidatos = data;
      },
      err => { }
    );
  }

  // método responsável pela submissão do formulário
  consulta() {
    // preview dos parâmetros no console
    console.log(this.params);
    // reseta os candidatos
    this.candidatos = [];
    // invoca o método que busca os candidatos de acordo com os parâmetros selecionados
    this.getCandidatos(this.params.cidade, this.params.cargo, this.params.grausEscolaridade, this.params.sexos, this.params.partidos);
  }

}
