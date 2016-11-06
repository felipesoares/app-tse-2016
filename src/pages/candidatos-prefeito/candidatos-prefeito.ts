import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'page-candidatos-prefeito',
  templateUrl: 'candidatos-prefeito.html'
})
export class CandidatosPrefeito {

	param = {cidade: 1}
	
  constructor(private http:Http) {
	  this.http = http;
  }

  ionViewDidLoad() {
    console.log('Hello CandidatosPrefeito Page');
  }

  consulta() {
    console.log("Consulta submetida");
	console.log(this.param);
  }
  
}
