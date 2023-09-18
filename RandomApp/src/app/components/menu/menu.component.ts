import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  public pswSetting : boolean = false;

  constructor(private navControl : NavController) {

   }

  ngOnInit() {}


  iniciar() {
    console.log("Click Iniciar");
    this.navControl.navigateForward('/training');


  }



  configurar() {
    console.log("Click Configurar");

    this.pswSetting = true;



    // this.navControl.navigateForward('/settings');



  }

  cancelar(){
    this.pswSetting = false;
  }




}
