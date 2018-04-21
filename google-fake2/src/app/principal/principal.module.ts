import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabecalhoComponent, RodapeComponent],

  exports: [
    CabecalhoComponent,
    RodapeComponent
  ]
})
export class PrincipalModule { }
