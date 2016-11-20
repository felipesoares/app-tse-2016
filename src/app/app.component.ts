// importa as libs necessárias
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

// importa as pages do app para o menu
import { Login } from '../pages/login/login';
import { PerfilEleitorado } from '../pages/perfil-eleitorado/perfil-eleitorado';
import { CandidatosPrefeito } from '../pages/candidatos-prefeito/candidatos-prefeito';
import { CandidatosVereador } from '../pages/candidatos-vereador/candidatos-vereador';

// define o template html padrão
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  // assinatura das views do app
  @ViewChild(Nav) nav: Nav;

  // define a página principal (inicial) do app
  rootPage: any = PerfilEleitorado;

  // vetor de páginas
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // configura as páginas do app
    this.pages = [
      { title: 'Perfil Eleitoral', component: PerfilEleitorado },
      { title: 'Candidatos a Prefeito', component: CandidatosPrefeito },
      { title: 'Candidatos a Vereador', component: CandidatosVereador },
      { title: 'Logout', component: Login }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  // método responsável por abrir uma determinada página
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
