import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FerramentaService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @Input() data: any;
  id = 0;
  produto: string = '';
  basePequeno: string = '';
  baseMedio: string = '';
  baseGrande: string = '';

  constructor(
    private ferramentaService: FerramentaService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.id = this.data.id;
    this.produto = this.data.product;
    this.basePequeno = this.data.base_little;
    this.baseMedio = this.data.base_medium;
    this.baseGrande = this.data.base_big;
  }

  update() {
    if (
      this.produto
      && this.basePequeno
      && this.baseMedio
      && this.baseGrande
    ) {
      this.ferramentaService.update(
        {
          id: this.id,
          product: this.produto,
          base_little: this.basePequeno,
          base_medium: this.baseMedio,
          base_big: this.baseGrande
        }
      ).then(() => {
        this.modalController.dismiss(
          {
            id: this.id,
            product: this.produto,
            base_little: this.basePequeno,
            base_medium: this.baseMedio,
            base_big: this.baseGrande,
          }
        );

        this.alertController.create({
          header: 'Aviso',
          message: 'Ferramenta atualizada com sucesso.',
          buttons: ['OK']
        }).then(alert => alert.present());
      });
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
