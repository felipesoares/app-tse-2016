import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

import { NavBar } from '../components/nav-bar/nav-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilEleitorado,
    CandidatosPrefeito,
    CandidatosVereador,
    NavBar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilEleitorado,
    CandidatosPrefeito,
    CandidatosVereador,
    NavBar
  ],
  providers: []
})
export class AppModule {}
