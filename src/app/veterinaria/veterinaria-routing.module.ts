import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariaPage } from './veterinaria.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariaPageRoutingModule {}
