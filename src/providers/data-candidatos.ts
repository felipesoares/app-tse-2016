import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataCandidatos {

  constructor(public http: Http) {
    this.http = http;
  }

  getCandidatos() {
    return this.http.get('/assets/candidatos.json').map((res: Response) => res.json());
  }

}
