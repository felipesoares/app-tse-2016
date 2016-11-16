import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataCandidatos {

  dominio: string;

  constructor(public http: Http) {
    this.http = http;
    
    this.dominio = "http://ws.localhost.com";
    this.dominio = "http://ws.localhost.com:8080";
    this.dominio = "http://webservice.cafecomnutricao.com.br";
  }

  getCidades() {
    let url = this.dominio + '/candidatos/cidades';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getCandidatos(cidade: string, cargo = null, grausEscolaridade = [], sexos = [], partidos = []) {

    let url = this.dominio + '/candidatos';

    url += "/" + cidade;
    url += "/" + ( cargo ? cargo : "0" );

    url += "/" + ( grausEscolaridade.length > 0 ? grausEscolaridade : "0" );
    url += "/" + ( sexos.length > 0 ? sexos : "0" );
    url += "/" + ( partidos.length > 0 ? partidos : "0" );
    
    return this.http.get(url).map((res: Response) => res.json());
    
  }

  getGrausEscolaridade() {
    let url = this.dominio + '/candidatos/graus-escolaridade';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getSexos() {
    let url = this.dominio + '/candidatos/sexos';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getPartidos() {
    let url = this.dominio + '/candidatos/partidos';
    return this.http.get(url).map((res: Response) => res.json());
  }

}
