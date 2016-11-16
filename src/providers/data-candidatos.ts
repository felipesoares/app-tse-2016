import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataCandidatos {

  constructor(public http: Http) {
    this.http = http;
  }

  getCidades() {
    let url = 'http://ws.localhost.com/candidatos/cidades';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getCandidatos(cidade: string, cargo = null, grausEscolaridade = [], sexos = [], partidos = []) {

    let url = "http://ws.localhost.com/candidatos";

    url += "/" + cidade;
    url += "/" + ( cargo ? cargo : "0" );

    url += "/" + ( grausEscolaridade.length > 0 ? grausEscolaridade : "0" );
    url += "/" + ( sexos.length > 0 ? sexos : "0" );
    url += "/" + ( partidos.length > 0 ? partidos : "0" );
    
    return this.http.get(url).map((res: Response) => res.json());
    
  }

  getGrausEscolaridade() {
    let url = 'http://ws.localhost.com/candidatos/graus-escolaridade';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getSexos() {
    let url = 'http://ws.localhost.com/candidatos/sexos';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getPartidos() {
    let url = 'http://ws.localhost.com/candidatos/partidos';
    return this.http.get(url).map((res: Response) => res.json());
  }

}
