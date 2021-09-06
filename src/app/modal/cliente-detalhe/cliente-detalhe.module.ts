import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { FerramentaDetalhePageRoutingModule } from './cliente-detalhe-routing.module';
import { ClienteDetalhePage } from './cliente-detalhe.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerramentaDetalhePageRoutingModule,
  ],
  declarations: [ClienteDetalhePage],
  providers: [ClienteService]
})
export class FerramentaDetalhePageModule {}
