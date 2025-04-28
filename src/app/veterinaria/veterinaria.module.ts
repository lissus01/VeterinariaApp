import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariaPageRoutingModule } from './veterinaria-routing.module';

import { VeterinariaPage } from './veterinaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariaPageRoutingModule
  ],
  declarations: [VeterinariaPage]
})
export class VeterinariaPageModule {}
