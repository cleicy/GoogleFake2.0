import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuscaComponent],

  exports: [BuscaComponent]
})
export class ConteudoModule { }
