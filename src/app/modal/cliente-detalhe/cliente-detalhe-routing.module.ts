import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentaDetalhePage } from './cliente-detalhe.page';


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
