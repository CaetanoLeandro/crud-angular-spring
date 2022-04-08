import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia.component';
import {FormsModule} from "@angular/forms";
import { RoutesComponent } from './component/routes/routes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService} from "./component/user/token/token-interceptor.service";
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { FundoAmareloDirective } from './diretiva-cor/fundo-amarelo.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContasComponent } from './contas/contas.component'
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    RoutesComponent,
    DiretivasNgifComponent,
    FundoAmareloDirective,
    HomeComponent,
    LoginComponent,
    ContasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
