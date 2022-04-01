import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia.component';
import {FormsModule} from "@angular/forms";
import { RoutesComponent } from './component/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
