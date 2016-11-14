import { Component } from "@angular/core";
import { DataCandidatos } from '../../providers/data-candidatos';

@Component({
  selector: "page-candidatos-vereador",
  templateUrl: "candidatos-vereador.html"
})
export class CandidatosVereador {

  candidatos = [];
  partidos = [];
  param = { cidade: 1, grauEscolaridade: "", sexo: "", partido: "" }

  constructor(private _service: DataCandidatos) {
    this.partidos = [
      "DEM", "NOVO", "PC do B", "PCB", "PCO", "PDT", "PEN", "PHS", "PMB", "PMDB", "PMN", "PP",
      "PPL", "PPS", "PR", "PRB", "PROS", "PRP", "PRTB", "PSB", "PSC", "PSD", "PSDB", "PSDC",
      "PSL", "PSOL", "PSTU", "PT", "PT do B", "PTB", "PTC", "PTN", "PV", "REDE", "SD"
    ];
    this.getCandidatos();
  }

  getCandidatos() {
    this._service.getCandidatos().subscribe(
      data => {
        //this.candidatos = data
        console.log(data);

        this.candidatos = [];
        for (let index = 0; index < data.length; index++) {
          if (data[index].CODIGO_CARGO == 13) {
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
    //CODIGO_CARGO:13,NOME_CANDIDATO,DESCRICAO_GRAU_INSTRUCAO,DESCRICAO_SEXO,SIGLA_PARTIDO
  }

}
