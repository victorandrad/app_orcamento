import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectClientePage } from './select-cliente.page';


const routes: Routes = [
  {
    path: '',
    component: SelectClientePage
  },
  {
    path: 'ferramenta',
    loadChildren: () => import('../../pages/select-ferramenta/select-ferramenta.module').then( m => m.SelectFerramentaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectClientePageRoutingModule {}
