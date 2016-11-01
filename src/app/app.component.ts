import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Login } from '../pages/login/login';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = PerfilEleitorado;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
