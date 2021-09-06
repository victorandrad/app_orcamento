import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {
  resumo: any;
  vSemImposto: any = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.resumo = this.router.getCurrentNavigation().extras.state;
  }

  porteEmpresa() {

    if (this.resumo.sizeCompany === 'p') {
      return 'Pequeno Porte';
    }

    if (this.resumo.sizeCompany === 'm') {
      return 'Médio Porte'
    }

    if (this.resumo.sizeCompany === 'g') {
      return 'Grande Porte';
    }
  }

  valorSemImposto(cliente, item) {
    if (cliente.sizeCompany === 'p') {
      return item.base_little;
    }

    if (cliente.sizeCompany === 'm') {
      return item.base_medium;
    }

    if (cliente.sizeCompany === 'g') {
      return item.base_big;
    }
  }

  valorComImposto(cliente, item) {
    if (cliente.sizeCompany === 'p') {
      return parseFloat(item.base_little) + (parseInt(item.base_little) * cliente.imposto);
    }

    if (cliente.sizeCompany === 'm') {
      return parseFloat(item.base_medium) + (parseInt(item.base_medium) + cliente.imposto);
    }

    if (cliente.sizeCompany === 'g') {
      return parseFloat(item.base_big) + (parseInt(item.base_big) * cliente.imposto);
    }
  }

  valorParceiro(cliente, item) {
    if (cliente.sizeCompany === 'p') {
      return parseFloat(item.base_little) - (parseInt(item.base_little) * cliente.comissao);
    }

    if (cliente.sizeCompany === 'm') {
      return parseFloat(item.base_medium) - (parseInt(item.base_medium) * cliente.comissao);
    }

    if (cliente.sizeCompany === 'g') {
      return parseFloat(item.base_big) - (parseInt(item.base_big) * cliente.comissao);
    }
  }

}
