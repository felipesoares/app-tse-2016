import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {Http} from '@angular/http';

import { PerfilEleitorado } from '../perfil-eleitorado/perfil-eleitorado';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  usuario = {}
  
  constructor(public navCtrl: NavController, public menu: MenuController) {
	  this.menu = menu;
	  this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  login() {
    console.log(this.usuario);
	this.navCtrl.setRoot(PerfilEleitorado);
  }

}
