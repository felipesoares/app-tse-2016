import { Component } from '@angular/core';
import { DataCandidatos } from '../../providers/data-candidatos';

@Component({
  selector: 'page-candidatos-prefeito',
  templateUrl: 'candidatos-prefeito.html'
})
export class CandidatosPrefeito {

  cidades = [];
  candidatos = [];
  params = { cidade: '41998', cargo: 11 }

  constructor(private _candidatos: DataCandidatos) {
    this.getCidades();
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

  getCandidatos(cidade: string, cargo = null) {
    this._candidatos.getCandidatos(cidade, cargo).subscribe(
      data => {
        this.candidatos = data;
      },
      err => { }
    );
  }

  consulta() {
    console.log(this.params);
    this.getCandidatos(this.params.cidade, this.params.cargo);
  }

}
