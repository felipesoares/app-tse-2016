import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PerfilEleitorado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil-eleitorado',
  templateUrl: 'perfil-eleitorado.html'
})
export class PerfilEleitorado {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PerfilEleitorado Page');
  }

}
