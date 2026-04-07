import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,IonHeader,IonTitle,IonToolbar,IonButton,IonButtons,IonMenuButton,IonItem,IonInput,IonLabel,IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-minhas-contas',
  templateUrl: './minhas-contas.page.html',
  styleUrls: ['./minhas-contas.page.scss'],
  standalone: true,
  imports: [IonContent,IonHeader,IonTitle,IonToolbar,CommonModule,FormsModule,IonButton,IonButtons,IonMenuButton,IonItem,IonInput,IonLabel,IonList]
})
export class MinhasContasPage implements OnInit {

  mostrarBotao: boolean = true;
  mostrarFormulario: boolean = false;

  nomeConta: string = '';
  valor: any = '';
  dataVencimento: any = '';
  contas: any[] = [];

  cadastrar() {
    if (!this.nomeConta || !this.valor || !this.dataVencimento) {
      console.log('Preencha todos os campos');
      return;
    }

    var novaConta = {
      nome: this.nomeConta,
      valor: this.valor,
      dataVencimento: this.dataVencimento,
      pago: false
    };

    this.contas.push(novaConta);

    console.log(this.contas);

    // limpar campos
    this.nomeConta = '';
    this.valor = null;
    this.dataVencimento = null;
  }
  
  abrirFormulario() {
      this.mostrarFormulario = true;
      this.mostrarBotao = false;
    }
  constructor() { }

  ngOnInit() {
  }

}
