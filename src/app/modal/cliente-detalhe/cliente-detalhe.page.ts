import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditPage } from 'src/app/pages/cliente/edit/edit.page';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.page.html',
  styleUrls: ['./cliente-detalhe.page.scss'],
})
export class ClienteDetalhePage implements OnInit {

  @Input() data;
  @Input() cliente = [];

  constructor(
    private modalController: ModalController,
    private clienteService: ClienteService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async edit() {
    let modal = await this.modalController.create({
      component: EditPage,
      swipeToClose: true,
      presentingElement: document.getElementById('root-router'),
      componentProps: {
        data: this.data
      }
    });

    await modal.present();

    let { data } = await modal.onWillDismiss();

    if (data) {
      this.data = data;
    }

  }

  delete() {
    this.alertController.create({
      header: 'Aviso',
      message: 'Deseja deletar esse cliente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.clienteService.delete(this.data).then(() => {
              this.modalController.dismiss();

              this.alertController.create({
                header: 'Aviso',
                message: 'Cliente deletado com sucesso.',
                buttons: ['OK']
              }).then(alert => alert.present());
            });
          }
        }
      ]
    }).then(alert => alert.present());

  }

  close() {
    this.modalController.dismiss();
  }

  porteEmpresa() {
    
    if (this.data.sizeCompany === 'p') {
      return 'Pequeno Porte';
    }

    if (this.data.sizeCompany === 'm') {
      return 'Médio Porte'
    }

    if (this.data.sizeCompany === 'g') {
      return 'Grande Porte';
    }
  }

}
