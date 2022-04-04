import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir() {
    console.log('Solicitado nova transferência!');


    const valorEmitir: Transferencia = {
      valor: this.valor, destino: this.destino,
      id: '',
      data: undefined
    };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));

  }

  limparCampos(){
    this.valor = 0;
    this.destino = "";
  }

}