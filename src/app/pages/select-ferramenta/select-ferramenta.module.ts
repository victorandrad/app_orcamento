import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FerramentaService } from 'src/app/services/ferramentas.service';
import { SelectFerramentaPageRoutingModule } from './select-ferramenta-routing.module';
import { SelectFerramentaPage } from './select-ferramenta.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFerramentaPageRoutingModule
  ],
  declarations: [SelectFerramentaPage],
  providers: [FerramentaService],
})
export class SelectFerramentaPageModule {}
