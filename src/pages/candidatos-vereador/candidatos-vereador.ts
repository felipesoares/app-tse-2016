import { Component } from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: "page-candidatos-vereador",
  templateUrl: "candidatos-vereador.html"
})
export class CandidatosVereador {

	param = {cidade: 1, grauEscolaridade: "", sexo: "", partido: ""}
	partidos = [];
	
  constructor(private http:Http) {
	  this.http = http;
	  this.partidos = [
		"DEM", "NOVO", "PC do B", "PCB", "PCO", "PDT", "PEN", "PHS", "PMB", "PMDB", "PMN", "PP", 
		"PPL", "PPS", "PR", "PRB", "PROS", "PRP", "PRTB", "PSB", "PSC", "PSD", "PSDB", "PSDC", 
		"PSL", "PSOL", "PSTU", "PT", "PT do B", "PTB", "PTC", "PTN", "PV", "REDE", "SD"
	  ];
  }

  ionViewDidLoad() {
    console.log("Hello CandidatosVereador Page");
  }

  consulta() {
    console.log("Consulta submetida");
	console.log(this.param);
  }
  
}
