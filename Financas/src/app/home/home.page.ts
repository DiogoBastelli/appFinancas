import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage {

  pagina: string = 'gastos';

  constructor(private menu: MenuController) {}

  selecionar(p: string) {
    this.pagina = p;
    this.menu.close(); 
  }

}