import {Component} from '@angular/core';

@Component({
     selector:'nova-transferencia',
     templateUrl:'./nova-transferenciacomponent.html',
     styleUrls:['./nova-transferencia.css']
})
export class NovaTransferenciaComponent {

     valor: number = 0;
     destino: number = 0;

     transferir(){
     console.log('Solicitada nova transferência');
     console.log('valor: ', this.valor);
     console.log('destino: ', this.destino);
  }
}
