import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FerramentaService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-select-ferramenta',
  templateUrl: './select-ferramenta.page.html',
  styleUrls: ['./select-ferramenta.page.scss'],
})
export class SelectFerramentaPage implements OnInit {
  ferramentas: any = [];
  cliente: any;
  tipoVenda: any = 'pr';
  imposto: number = 0;
  comissao: number = 0;

  constructor(
    private ferramentaService: FerramentaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cliente = this.router.getCurrentNavigation().extras.state;
    this.ferramentaService.index().then(response => {
      this.ferramentas = response;
    });
  }

  resumo() {
    let sFerramentas = this.ferramentas.filter(data => {
      return data.isChecked != false;
    });

    this.cliente.ferramentas = sFerramentas;
    this.cliente.tipoVenda = this.tipoVenda;
    this.cliente.imposto = this.imposto / 100;
    this.cliente.comissao = this.comissao / 100;
    
    this.router.navigateByUrl(this.router.url + '/resumo', {state: this.cliente});
  }
}
