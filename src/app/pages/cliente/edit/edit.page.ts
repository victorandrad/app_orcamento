import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @Input() data: any;
  id = 0;
  nomeContato: string = '';
  emailContato: string = '';
  telefoneContato: string = '';
  nomeFantasia: string = '';
  email: string = '';
  telefoneComercial: string = '';
  cnpj: string = '';
  cep: string = '';
  endereco: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  qtdFuncionarios: string = '';
  porteEmpresa: string = '';

  constructor(
    private ClienteService: ClienteService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.id = this.data.id;
    this.nomeContato = this.data.nameContact;
    this.emailContato = this.data.emailContact;
    this.telefoneContato = this.data.phoneContact;
    this.nomeFantasia = this.data.nameFantasy;
    this.email = this.data.email;
    this.telefoneComercial = this.data.phoneCorp;
    this.cnpj = this.data.cnpj;
    this.cep = this.data.cep;
    this.endereco = this.data.street;
    this.bairro = this.data.district;
    this.cidade = this.data.city;
    this.estado = this.data.state;
    this.qtdFuncionarios = this.data.numberEmployees;
    this.porteEmpresa = this.data.sizeCompany;
  }

  update() {
    if (
      this.nomeContato
      && this.emailContato
      && this.telefoneContato
      && this.nomeFantasia
      && this.email
      && this.telefoneComercial
      && this.cnpj
      && this.cep
      && this.endereco
      && this.bairro
      && this.cidade
      && this.estado
      && this.qtdFuncionarios
      && this.porteEmpresa
    ) {
      this.ClienteService.update(
        {
          nameContact: this.nomeContato,
          emailContact: this.emailContato,
          phoneContact: this.telefoneContato,
          nameFantasy: this.nomeFantasia,
          email: this.email,
          phoneCorp: this.telefoneComercial,
          cnpj: this.cnpj,
          cep: this.cep,
          street: this.endereco,
          district: this.bairro,
          city: this.cidade,
          state: this.estado,
          numberEmployees: this.qtdFuncionarios,
          sizeCompany: this.porteEmpresa,
        }
      ).then(() => {
        this.modalController.dismiss(
          {
            id: this.id,
            nameContact: this.nomeContato,
            emailContact: this.emailContato,
            phoneContact: this.telefoneContato,
            nameFantasy: this.nomeFantasia,
            email: this.email,
            phoneCorp: this.telefoneComercial,
            cnpj: this.cnpj,
            cep: this.cep,
            street: this.endereco,
            district: this.bairro,
            city: this.cidade,
            state: this.estado,
            numberEmployees: this.qtdFuncionarios,
            sizeCompany: this.porteEmpresa,
          }
        );

        this.alertController.create({
          header: 'Aviso',
          message: 'Cliente atualizado com sucesso.',
          buttons: ['OK']
        }).then(alert => alert.present());
      });
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
