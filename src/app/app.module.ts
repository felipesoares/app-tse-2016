// importa as libs necessárias
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// importa as pages do app
import { Login } from '../pages/login/login';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

// importa os services do app
import { DataLogin } from '../providers/data-login';
import { DataCandidatos } from '../providers/data-candidatos';
import { DataEleitorado } from '../providers/data-eleitorado';

// registra e declara os módulos necessários e utilizados globalmente pelo app
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
  providers: [DataLogin, DataCandidatos, DataEleitorado]
})
export class AppModule {}
