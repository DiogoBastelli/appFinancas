import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader,IonTitle,IonToolbar,IonButton,IonButtons,IonMenuButton,IonItem,IonLabel,IonList} from '@ionic/angular/standalone';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-minhas-contas',
  templateUrl: './minhas-contas.page.html',
  styleUrls: ['./minhas-contas.page.scss'],
  standalone: true,
  imports: [IonContent,IonHeader,IonTitle,IonToolbar,CommonModule,FormsModule,IonButton,IonButtons,IonMenuButton,IonItem ,IonLabel,IonList]
})
export class MinhasContasPage implements OnInit {

  contas: any[] = [];

  constructor(private contaService: ContaService) {}

  ionViewWillEnter() {
    this.contas = this.contaService.getContas();
  }

  ngOnInit() {
    this.contas = this.contaService.getContas();
  }

  marcarComoPago(conta: any) {
    conta.pago = true;
    this.contaService.salvarContas(this.contas);
  }
}
