import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-select-cliente',
  templateUrl: './select-cliente.page.html',
  styleUrls: ['./select-cliente.page.scss'],
})
export class SelectClientePage implements OnInit {

  clientes: any = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clienteService.index().then(response => {
      this.clientes = response;
    });
  }

  ferramentas(cliente) {
    this.router.navigateByUrl(this.router.url + '/ferramenta', {state: cliente})
  }
}
