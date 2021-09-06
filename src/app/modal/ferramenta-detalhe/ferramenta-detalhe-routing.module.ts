import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerramentaDetalhePage } from './ferramenta-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: FerramentaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerramentaDetalhePageRoutingModule {}
