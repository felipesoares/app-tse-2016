import { Component } from '@angular/core';
import { DataCandidatos } from '../../providers/data-candidatos';

@Component({
  selector: 'page-candidatos-prefeito',
  templateUrl: 'candidatos-prefeito.html',
  providers: [DataCandidatos]
})
export class CandidatosPrefeito {

  candidatos = [];
  param = { cidade: 1 }

  constructor(private _service: DataCandidatos) {
    this.getCandidatos();
  }

  getCandidatos() {
    this._service.getCandidatos().subscribe(
      data => {
        //this.candidatos = data
        console.log(data);

        this.candidatos = [];
        for (let index = 0; index < data.length; index++) {
          if (data[index].CODIGO_CARGO == 11) {
            this.candidatos.push(data[index]);
          }
        }
      },
      err => { }
    );
  }

  consulta() {
    console.log("Consulta submetida");
    console.log(this.param);
    this.getCandidatos();
    //CODIGO_CARGO:11,NOME_CANDIDATO,NOME_URNA_CANDIDATO,SIGLA_PARTIDO,DESCRICAO_GRAU_INSTRUCAO,DESCRICAO_COR_RACA,DESCRICAO_SEXO,DESCRICAO_ESTADO_CIVIL,IDADE_DATA_ELEICAO
  }

}
