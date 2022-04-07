import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {


   contas: string[] = ["Corrente PF", "Corrente PJ", "Poupança PF", "Poupança PJ"];

   mostrarContas: boolean =false;

  constructor() { }


  ngOnInit(): void {
  }
    onMostrarContas(){
      this.mostrarContas = !this.mostrarContas;
    }
  }

