import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { DataEleitorado } from '../../providers/data-eleitorado';

@Component({
  selector: 'page-perfil-eleitorado',
  templateUrl: 'perfil-eleitorado.html'
})
export class PerfilEleitorado {

  totalEleitorado: number;

  zonasEleitorais = [];
  grausEscolaridade = [];
  faixasEtarias = [];

  params = { uf: 'MG', zonaEleitoral: '56', faixasEtarias: [], grausEscolaridade: [] }

  constructor(public menu: MenuController, private _eleitorado: DataEleitorado) {

    this.menu.swipeEnable(true);
    
    this.getTotal(this.params.uf, this.params.zonaEleitoral);

    this.getZonasEleitorais(this.params.uf);
    this.getFaixasEtarias();
    this.getGrausEscolaridade();

  }

  getZonasEleitorais(uf: string) {
    this._eleitorado.getZonasEleitorais(uf).subscribe(
      data => {
        this.zonasEleitorais = data;
      },
      err => { }
    );
  }

  getFaixasEtarias() {
    this._eleitorado.getFaixasEtarias().subscribe(
      data => {
        this.faixasEtarias = data;
      },
      err => { }
    );
  }

  getGrausEscolaridade() {
    this._eleitorado.getGrausEscolaridade().subscribe(
      data => {
        this.grausEscolaridade = data;
      },
      err => { }
    );
  }

  getTotal(uf: string, zonaEleitoral: string) {
    this._eleitorado.getTotal(uf, zonaEleitoral).subscribe(
      data => {
        
        let total: number = 0;

        for(let i = 0; i < data.length; i++){  
          total += parseInt(data[i].QUANTIDADE);
        }
        
        this.totalEleitorado = total;

      },
      err => { }
    );
  }

  getEleitorado(uf: string, zonaEleitoral: string, faixasEtarias = [], grausEscolaridade = []) {
    this._eleitorado.getEleitorado(uf, zonaEleitoral, faixasEtarias, grausEscolaridade).subscribe(
      data => {
        //this.eleitorado = data;
      },
      err => { }
    );
  }

  consulta() {
    console.log(this.params);
    this.getTotal(this.params.uf, this.params.zonaEleitoral);
    this.getEleitorado(this.params.uf, this.params.zonaEleitoral, this.params.faixasEtarias, this.params.grausEscolaridade);
  }

}
