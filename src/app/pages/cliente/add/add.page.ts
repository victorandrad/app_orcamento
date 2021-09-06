import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  ClienteForm: FormGroup;
  porteEmpresa: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ClienteService: ClienteService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.ClienteForm = this.formBuilder.group({
      nomeContato: [''],
      emailContato: [''],
      telefoneContato: [''],
      nomeFantasia: [''],
      email: [''],
      telefoneComercial: [''],
      cnpj: [''],
      cep: [''],
      endereco: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      qtdFuncionarios: [''],
      porteEmpresa: [''],
    });
  }

  add() {
    let {
      nomeContato,
      emailContato,
      telefoneContato,
      nomeFantasia,
      email,
      telefoneComercial,
      cnpj,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      qtdFuncionarios,
      porteEmpresa,
    } = this.ClienteForm.controls;

    if (
      nomeContato.valid
      && emailContato.valid
      && telefoneContato.valid
      && nomeFantasia.valid
      && email.valid
      && telefoneComercial.valid
      && cnpj.valid
      && cep.valid
      && endereco.valid
      && bairro.valid
      && cidade.valid
      && estado.valid
      && qtdFuncionarios.valid
      && porteEmpresa.valid
    ) {
      this.ClienteService.store({
        nameContact: nomeContato.value,
        emailContact: emailContato.value,
        phoneContact: telefoneContato.value,
        nameFantasy: nomeFantasia.value,
        email: email.value,
        phoneCorp: telefoneComercial.value,
        cnpj: cnpj.value,
        cep: cep.value,
        street: endereco.value,
        district: bairro.value,
        city: cidade.value,
        state: estado.value,
        numberEmployees: qtdFuncionarios.value,
        sizeCompany: this.porteEmpresa,
      }).then(() => {
        this.ClienteForm.reset();
        this.alertController.create({
          header: 'Aviso',
          message: 'Cliente cadastrado com sucesso.',
          buttons: ['OK']
        }).then(alert => alert.present());
      });
    }
  }
}
