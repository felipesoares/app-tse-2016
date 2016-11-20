// importa as libs necessárias
import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

// importa os services utilizados
import { DataEleitorado } from '../../providers/data-eleitorado';

// define o template html da página
@Component({
  selector: 'page-perfil-eleitorado',
  templateUrl: 'perfil-eleitorado.html'
})
export class PerfilEleitorado {

  // declaração e inicialização das variáveis
  zonasEleitorais = [];
  grausEscolaridade = [];
  faixasEtarias = [];

  params = {
    uf: 'MG',
    zonaEleitoral: '56',
    faixasEtarias: [],
    grausEscolaridade: []
  }

  eleitorado = {
    feminino: { qtd: 0 },
    masculino: { qtd: 0 },
    ni: { qtd: 0 },
    total: 0
  };

  resultado = {
    feminino: { qtd: 0, per: 0 },
    masculino: { qtd: 0, per: 0 },
    ni: { qtd: 0, per: 0 },
    total: { qtd: 0, per: 0 }
  }

  // construtor
  constructor(public menu: MenuController, private _eleitorado: DataEleitorado) {
    // chamada de métodos iniciais
    this.menu.swipeEnable(true);
    this.getZonasEleitorais(this.params.uf);
    this.getFaixasEtarias();
    this.getGrausEscolaridade();
    this.consulta();
  }

  // método responsável por chamar o service que busca as zonas eleitorais do estado e preenche o respectivo combo-box
  getZonasEleitorais(uf: string) {
    this._eleitorado.getZonasEleitorais(uf).subscribe(
      data => {
        this.zonasEleitorais = data;
      },
      err => {}
    );
  }

  // método responsável por chamar o service que busca as faixas etárias e preenche o respectivo combo-box
  getFaixasEtarias() {
    this._eleitorado.getFaixasEtarias().subscribe(
      data => {
        this.faixasEtarias = data;
      },
      err => {}
    );
  }

  // método responsável por chamar o service que busca os graus de escolaridade e preenche o respectivo combo-box
  getGrausEscolaridade() {
    this._eleitorado.getGrausEscolaridade().subscribe(
      data => {
        this.grausEscolaridade = data;
      },
      err => {}
    );
  }

  // método responsável por chamar o service que busca a quantidade do eleitorado total (de determina zona eleitoral)
  // e invoca o método de busca dos dados (do eleitorado) de acordo com os parâmetros informados
  getTotal(uf: string, zonaEleitoral: string) {

    this._eleitorado.getTotal(uf, zonaEleitoral).subscribe(

      data => {

        let total = 0;

        for (let i = 0; i < data.length; i++) {
          total += parseInt(data[i].QUANTIDADE);
        }

        this.eleitorado.total = total;
        this.getEleitorado(this.params.uf, this.params.zonaEleitoral, this.params.faixasEtarias, this.params.grausEscolaridade);

      },
      err => {}
    );

  }

  // método responsável por chamar o service que busca os dados (do eleitorado) de acordo com os parâmetros informados
  // e calcula os respectivos valores consolidando-os por sexo
  getEleitorado(uf: string, zonaEleitoral: string, faixasEtarias = [], grausEscolaridade = []) {
    this._eleitorado.getEleitorado(uf, zonaEleitoral, faixasEtarias, grausEscolaridade).subscribe(
      data => {

        let totalQtd = 0;
        let totalPer = 0;

        for (let i = 0; i < data.length; i++) {

          let qtd = parseInt(data[i].QUANTIDADE);

          if (data[i].SEXO == "FEMININO") {

            totalQtd += this.resultado.feminino.qtd = qtd;
            totalPer += this.resultado.feminino.per = (qtd / this.eleitorado.total * 100);

          } else if (data[i].SEXO == "MASCULINO") {

            totalQtd += this.resultado.masculino.qtd = qtd;
            totalPer += this.resultado.masculino.per = (qtd / this.eleitorado.total * 100);

          } else if (data[i].SEXO == "NÃO INFORMADO") {

            totalQtd += this.resultado.ni.qtd = qtd;
            totalPer += this.resultado.ni.per = (qtd / this.eleitorado.total * 100);

          }

          this.resultado.total.qtd = totalQtd;
          this.resultado.total.per = totalPer;

        }

      },
      err => {}
    );
  }

  // método responsável pela submissão do formulário
  consulta() {
    // preview dos parâmetros no console
    console.log(this.params);
    // reseta os valores dos resultados
    this.eleitorado.total = 0;
    this.resultado.feminino.qtd = 0;
    this.resultado.feminino.per = 0;
    this.resultado.masculino.qtd = 0;
    this.resultado.masculino.per = 0;
    this.resultado.ni.qtd = 0;
    this.resultado.ni.per = 0;
    this.resultado.total.qtd = 0;
    this.resultado.total.per = 0;
    // invoca o método que busca os dados do eleitorado de acordo com os parâmetros selecionados
    this.getTotal(this.params.uf, this.params.zonaEleitoral);
  }

}
