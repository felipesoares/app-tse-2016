// importa as libs necessárias
import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { DataLogin } from '../../providers/data-login';

// importa os services utilizados
import { PerfilEleitorado } from '../perfil-eleitorado/perfil-eleitorado';

// define o template html da página
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  // declaração e inicialização das variáveis
  usuario = {
    cpf: '',
    senha: ''
  }

  // construtor
  constructor(public navCtrl: NavController, public menu: MenuController, private alertCtrl: AlertController, private _login: DataLogin) {
    // chamada de métodos iniciais
    this.menu = menu;
    this.menu.swipeEnable(false);
  }

  // método responsável pela submissão do formulário
  logar() {
    // preview dos parâmetros no console
    console.log(this.usuario);

    // valida os dados vazios
    if(!(this.usuario.cpf && this.usuario.senha)){
      this.alert('Os campos CPF e senha devem ser informados!');
      return false;
    }

    // invoca o método que autentica o usuário de acordo com os campos CPF e senha informados
    this._login.autenticar(this.usuario.cpf, this.usuario.senha).subscribe(
      data => {
        if(data.success){
          //this.alert('Login efetuado com sucesso!');
          this.navCtrl.setRoot(PerfilEleitorado);
        }else{
          this.alert('Campos CPF e/ou senha inv&aacute;lidos!');
        }
      },
      err => { }
    );
  }

  // método responsável pelo envio de uma mensagem de alerta ao usuário
  alert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'ATEN&Ccedil;&Atilde;O:',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
