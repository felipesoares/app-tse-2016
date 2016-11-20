// importa as libs necessárias
import { Component } from '@angular/core';

// importa os services utilizados
import { DataCandidatos } from '../../providers/data-candidatos';

// define o template html da página
@Component({
  selector: 'page-candidatos-prefeito',
  templateUrl: 'candidatos-prefeito.html'
})
export class CandidatosPrefeito {

  // declaração e inicialização das variáveis
  cidades = [];
  candidatos = [];
  params = { cidade: '41998', cargo: 11 }

  // construtor
  constructor(private _candidatos: DataCandidatos) {
    // chamada de métodos iniciais
    this.getCidades();
    this.consulta();
  }

  // método responsável por chamar o service que busca as cidades e preenche o combo-box
  getCidades() {
    this._candidatos.getCidades().subscribe(
      data => {
        this.cidades = data;
      },
      err => { }
    );
  }

  // método responsável por chamar o service que busca os candidatos de acordo com os parâmetros informados
  getCandidatos(cidade: string, cargo = null) {

    this._candidatos.getCandidatos(cidade, cargo).subscribe(
      data => {
        this.candidatos = data;
      },
      err => { }
    );
    
  }

  // método responsável pela submissão do formulário
  consulta() {
    // preview dos parâmetros no console
    console.log(this.params);
    // reseta os candidatos
    this.candidatos = [];
    // invoca o método que busca os candidatos de acordo com os parâmetros selecionados
    this.getCandidatos(this.params.cidade, this.params.cargo);
  }

}
