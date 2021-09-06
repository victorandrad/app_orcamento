import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ClienteDetalhePage } from '../modal/cliente-detalhe/cliente-detalhe.page';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clientes: any = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    this.clienteService.index().then(response => {
      this.clientes = response;
    });
  }

  addCliente() {
    this.router.navigateByUrl(this.router.url + '/add');
  }

  async details(data, clientes) {
    let modal = await this.modalController.create({
      component: ClienteDetalhePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        data,
        clientes,
        routerO: this.routerOutlet
      }
    });

    modal.present();

    modal.onWillDismiss().then(() => {
      this.clienteService.index().then(response => {
        this.clientes = response
      });
    });
  }
}
