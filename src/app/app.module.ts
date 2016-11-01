import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

import { NavBar } from '../components/nav-bar/nav-bar';

@NgModule({
  declarations: [
    MyApp,
    Login,
    PerfilEleitorado,
    CandidatosPrefeito,
    CandidatosVereador,
    NavBar
  ],
  imports: [
    IonicModule.forRoot(MyApp, { animate: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    PerfilEleitorado,
    CandidatosPrefeito,
    CandidatosVereador,
    NavBar
  ],
  providers: []
})
export class AppModule {}
