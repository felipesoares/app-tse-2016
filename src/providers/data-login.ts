import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataLogin {

  dominio: string;

  constructor(public http: Http) {
    this.http = http;
    
    this.dominio = "http://ws.localhost.com";
    this.dominio = "http://ws.localhost.com:8080";
    this.dominio = "http://webservice.cafecomnutricao.com.br";
  }

  autenticar(cpf: string, senha: string) {

    let url = this.dominio + '/login';

    url += "/" + cpf;
    url += "/" + senha;

    return this.http.get(url).map((res: Response) => res.json());
    
  }

}
