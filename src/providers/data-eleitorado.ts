import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataEleitorado {

  dominio: string;

  constructor(public http: Http) {
    this.http = http;
    
    this.dominio = "http://ws.localhost.com";
    this.dominio = "http://ws.localhost.com:8080";
    this.dominio = "http://webservice.cafecomnutricao.com.br";
  }

  getZonasEleitorais(uf: string) {

    let url = this.dominio + '/eleitorado/zonas-eleitorais';

    url += "/" + uf;

    return this.http.get(url).map((res: Response) => res.json());
    
  }

  getFaixasEtarias() {
    let url = this.dominio + '/eleitorado/faixas-etarias';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getGrausEscolaridade() {
    let url = this.dominio + '/eleitorado/graus-escolaridade';
    return this.http.get(url).map((res: Response) => res.json());
  }
  
  getTotal(uf: string, zonaEleitoral: string) {

    let url = this.dominio + '/eleitorado/total';

    url += "/" + uf;
    url += "/" + zonaEleitoral;

    return this.http.get(url).map((res: Response) => res.json());
    
  }
  
  getEleitorado(uf: string, zonaEleitoral: string, faixasEtarias = [], grausEscolaridade = []) {

    let url = this.dominio + '/eleitorado';

    url += "/" + uf;
    url += "/" + zonaEleitoral;

    url += "/" + ( faixasEtarias.length > 0 ? faixasEtarias : "0" );
    url += "/" + ( grausEscolaridade.length > 0 ? grausEscolaridade : "0" );

    return this.http.get(url).map((res: Response) => res.json());
    
  }

}
