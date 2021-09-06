import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FerramentaService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  ferramentaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ferramentaService: FerramentaService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.ferramentaForm = this.formBuilder.group({
      produto: [''],
      basePequeno: [''],
      baseMedio: [''],
      baseGrande: [''],
    });
  }

  add() {
    let { baseGrande, baseMedio, basePequeno, produto } = this.ferramentaForm.controls;

    if (
      produto.valid
      && basePequeno.valid
      && baseMedio
      && baseGrande
    ) {
      this.ferramentaService.store({
        id: '',
        product: produto.value,
        base_little: basePequeno.value,
        base_medium: baseMedio.value,
        base_big: baseGrande.value,
        isChecked: false
      }).then(() => {
        this.ferramentaForm.reset();
        this.alertController.create({
          header: 'Aviso',
          message: 'Ferramenta cadastrada com sucesso.',
          buttons: ['OK']
        }).then(alert => alert.present());
      });
    }
  }
}
