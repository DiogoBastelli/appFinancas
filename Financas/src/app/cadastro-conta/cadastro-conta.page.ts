import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar ,IonButton, IonInput, IonItem , IonLabel, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.page.html',
  styleUrls: ['./cadastro-conta.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput , IonItem , IonLabel, IonButtons , IonMenuButton]
})
export class CadastroContaPage implements OnInit {

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

    this.contaService.adicionarConta(novaConta);
    
    this.nomeConta = '';
    this.valor = null;
    this.dataVencimento = null;
  }
  
  constructor(private contaService: ContaService) {}

  ngOnInit() {
        var dados = localStorage.getItem('contas');

    if (dados) {
      this.contas = JSON.parse(dados);
    }
  }

}
