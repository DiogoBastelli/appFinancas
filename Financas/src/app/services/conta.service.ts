import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private chave = 'contas';

  getContas() {
    var dados = localStorage.getItem(this.chave);
    return dados ? JSON.parse(dados) : [];
  }

  salvarContas(contas: any[]) {
    localStorage.setItem(this.chave, JSON.stringify(contas));
  }

  adicionarConta(conta: any) {
    var contas = this.getContas();
    contas.push(conta);
    this.salvarContas(contas);
  }
}