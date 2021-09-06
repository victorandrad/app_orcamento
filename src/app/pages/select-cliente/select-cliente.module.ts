import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { SelectClientePageRoutingModule } from './select-cliente-routing.module';
import { SelectClientePage } from './select-cliente.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectClientePageRoutingModule
  ],
  declarations: [SelectClientePage],
  providers: [ClienteService]
})
export class SelectClientePageModule {}
