import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataEleitorado {

  constructor(public http: Http) {
    this.http = http;
  }

  getZonasEleitorais(uf: string) {

    let url = 'http://ws.localhost.com/eleitorado/zonas-eleitorais';

    url += "/" + uf;

    return this.http.get(url).map((res: Response) => res.json());
    
  }

  getFaixasEtarias() {
    let url = 'http://ws.localhost.com/eleitorado/faixas-etarias';
    return this.http.get(url).map((res: Response) => res.json());
  }

  getGrausEscolaridade() {
    let url = 'http://ws.localhost.com/eleitorado/graus-escolaridade';
    return this.http.get(url).map((res: Response) => res.json());
  }
  
  getTotal(uf: string, zonaEleitoral: string) {

    let url = 'http://ws.localhost.com/eleitorado/total';

    url += "/" + uf;
    url += "/" + zonaEleitoral;

    return this.http.get(url).map((res: Response) => res.json());
    
  }
  
  getEleitorado(uf: string, zonaEleitoral: string, faixasEtarias = [], grausEscolaridade = []) {

    let url = 'http://ws.localhost.com/eleitorado';

    url += "/" + uf;
    url += "/" + zonaEleitoral;

    url += "/" + ( faixasEtarias.length > 0 ? faixasEtarias : "0" );
    url += "/" + ( grausEscolaridade.length > 0 ? grausEscolaridade : "0" );

    return this.http.get(url).map((res: Response) => res.json());
    
  }

}
