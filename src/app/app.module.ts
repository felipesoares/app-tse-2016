import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

import { DataCandidatos } from '../providers/data-candidatos';

@NgModule({
  declarations: [
    MyApp,
    Login,
    PerfilEleitorado,
    CandidatosPrefeito,
    CandidatosVereador
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
    CandidatosVereador
  ],
  providers: [DataCandidatos]
})
export class AppModule {}
