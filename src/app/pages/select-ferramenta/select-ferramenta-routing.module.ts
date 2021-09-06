import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectFerramentaPage } from './select-ferramenta.page';


const routes: Routes = [
  {
    path: '',
    component: SelectFerramentaPage
  },
  {
    path: 'resumo',
    loadChildren: () => import('../../pages/resumo/resumo.module').then( m => m.ResumoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFerramentaPageRoutingModule {}
