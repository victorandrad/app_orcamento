import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FerramentaService } from 'src/app/services/ferramentas.service';
import { FerramentaDetalhePageRoutingModule } from './ferramenta-detalhe-routing.module';
import { FerramentaDetalhePage } from './ferramenta-detalhe.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerramentaDetalhePageRoutingModule
  ],
  declarations: [FerramentaDetalhePage],
  providers: [FerramentaService]
})
export class FerramentaDetalhePageModule {}
