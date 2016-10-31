import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CandidatosPrefeito page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-candidatos-prefeito',
  templateUrl: 'candidatos-prefeito.html'
})
export class CandidatosPrefeito {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CandidatosPrefeito Page');
  }

}
