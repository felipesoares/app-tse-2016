import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CandidatosVereador page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-candidatos-vereador',
  templateUrl: 'candidatos-vereador.html'
})
export class CandidatosVereador {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CandidatosVereador Page');
  }

}
