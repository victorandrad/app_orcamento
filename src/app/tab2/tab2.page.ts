import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FerramentaDetalhePage } from '../modal/ferramenta-detalhe/ferramenta-detalhe.page';
import { FerramentaService } from '../services/ferramentas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ferramentas: any = [];

  constructor(
    private ferramentaService: FerramentaService,
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.ferramentaService.index().then(response => {
      this.ferramentas = response;
    });
  }

  addFerramenta() {
    this.router.navigateByUrl(this.router.url + '/add');
  }

  async details(data, ferramentas) {
    let modal = await this.modalController.create({
      component: FerramentaDetalhePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        data,
        ferramentas,
        routerO: this.routerOutlet
      }
    });

    modal.present();

    modal.onWillDismiss().then(() => {
      this.ferramentaService.index().then(response => {
        this.ferramentas = response
      });
    });
  }
}
