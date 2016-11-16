import { Component } from "@angular/core";
import { DataCandidatos } from '../../providers/data-candidatos';

@Component({
  selector: "page-candidatos-vereador",
  templateUrl: "candidatos-vereador.html"
})
export class CandidatosVereador {

  cidades = [];
  grausEscolaridade = [];
  sexos = [];
  partidos = [];

  candidatos = [];
  params = { cidade: '41998', cargo: 13, grausEscolaridade: [], sexos: [], partidos: [] }

  constructor(private _candidatos: DataCandidatos) {
    this.getCidades();

    this.getGrausEscolaridade();
    this.getSexos();
    this.getPartidos();

    this.getCandidatos(this.params.cidade, this.params.cargo);
  }

  getCidades() {
    this._candidatos.getCidades().subscribe(
      data => {
        this.cidades = data;
      },
      err => { }
    );
  }

  getGrausEscolaridade() {
    this._candidatos.getGrausEscolaridade().subscribe(
      data => {
        this.grausEscolaridade = data;
      },
      err => { }
    );
  }

  getSexos() {
    this._candidatos.getSexos().subscribe(
      data => {
        this.sexos = data;
      },
      err => { }
    );
  }

  getPartidos() {
    this._candidatos.getPartidos().subscribe(
      data => {
        this.partidos = data;
      },
      err => { }
    );
  }

  getCandidatos(cidade: string, cargo = null, grausEscolaridade = [], sexos = [], partidos = []) {
    this._candidatos.getCandidatos(cidade, cargo, grausEscolaridade, sexos, partidos).subscribe(
      data => {
        this.candidatos = data;
      },
      err => { }
    );
  }

  consulta() {
    console.log(this.params);
    this.getCandidatos(this.params.cidade, this.params.cargo, this.params.grausEscolaridade, this.params.sexos, this.params.partidos);
  }

}
