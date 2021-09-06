import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditPage } from 'src/app/pages/ferramenta/edit/edit.page';
import { FerramentaService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-ferramenta-detalhe',
  templateUrl: './ferramenta-detalhe.page.html',
  styleUrls: ['./ferramenta-detalhe.page.scss'],
})
export class FerramentaDetalhePage implements OnInit {

  @Input() data = [];
  @Input() ferramentas = [];

  constructor(
    private modalController: ModalController,
    private ferramentaService: FerramentaService,
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
      message: 'Deseja deletar essa ferramenta?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.ferramentaService.delete(this.data).then(() => {
              this.modalController.dismiss();

              this.alertController.create({
                header: 'Aviso',
                message: 'Ferramenta deletada com sucesso.',
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

}
