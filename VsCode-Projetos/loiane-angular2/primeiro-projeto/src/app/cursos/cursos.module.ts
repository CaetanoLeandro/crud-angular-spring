import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosDetailsComponent } from './cursos-details/cursos-details.component';
import { CursosService } from './cursos-service';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetailsComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  providers:[

    CursosService
  ]
})
export class CursosModule { }
