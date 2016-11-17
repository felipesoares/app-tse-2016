import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { DataLogin } from '../../providers/data-login';

import { PerfilEleitorado } from '../perfil-eleitorado/perfil-eleitorado';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  usuario = {
    cpf: '',
    senha: ''
  }

  constructor(public navCtrl: NavController, public menu: MenuController, private alertCtrl: AlertController, private _login: DataLogin) {
    this.menu = menu;
    this.menu.swipeEnable(false);
  }

  logar() {
    console.log(this.usuario);

    if(!(this.usuario.cpf && this.usuario.senha)){
      this.alert('Campos obrigat&oacute;rios n&atilde;o preenchidos!');
      return false;
    }

    this._login.autenticar(this.usuario.cpf, this.usuario.senha).subscribe(
      data => {
        if(data.success){
          //this.alert('Login efetuado com sucesso!');
          this.navCtrl.setRoot(PerfilEleitorado);
        }else{
          this.alert('Campo(s) CPF e/ou senha inv&aacute;lidos!');
        }
      },
      err => { }
    );
  }

  alert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'ATEN&Ccedil;&Atilde;O:',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
