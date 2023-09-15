import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private navControl : NavController) {

   }

  ngOnInit() {}


  iniciar() {
    console.log("Click Iniciar");
    this.navControl.navigateForward('/training');


  }



  configurar() {
    console.log("Click Configurar");
    this.navControl.navigateForward('/settings');



  }





}
