import { Component, OnInit } from '@angular/core';
import { Observable, interval, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {

  // public valores: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "AMARILLO", "ROJO", "AZUL", "NARANJA", "VERDE", "NEGRO"];
  public secuenciaRnd: string[] = [];
  public cantidadEstimulos : number = 0;  // Máx: 16

  public show = "Iniciando...";

  constructor() {
  }

  ngOnInit() {

    this.secuenciaRnd = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "AMARILLO", "ROJO", "AZUL", "NARANJA", "VERDE", "NEGRO"];
    this.randomize();

    console.log(this.secuenciaRnd);
    console.log(this.cantidadEstimulos);
    
    this.changeValue();

  }


  reiniciar(){
    this.show = "Reiniciando...";
    this.randomize();
    console.log(this.secuenciaRnd);
    this.changeValue();
  }


  randomize(){
    this.secuenciaRnd.sort(this.rndSort);
    this.cantidadEstimulos = 8;
}

  changeValue() {
    console.log("change value init");
    const changes = interval(5000) // Cambio cada 5 segundos
      .pipe(
        take(this.cantidadEstimulos),
        switchMap(() => {
          // Cambiar el valor
          this.customizeShow(this.secuenciaRnd[this.cantidadEstimulos]);
          // this.show = this.secuenciaRnd[this.cantidadEstimulos];
          this.cantidadEstimulos--;
          return this.delay(2000); // Mantener el valor por 2 segundos
        })
      );

    changes.subscribe(() => {
      // Restaurar el valor por defecto
      if (this.cantidadEstimulos != 0) {
        this.customizeShow('...');
      } else {
        this.customizeShow('FIN');
      }
    });
  }

  delay(ms: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(null);
        observer.complete();
      }, ms);
    });
  }

  customizeShow(valor: string) {
    console.log("customize: " + valor);

    switch (valor) {
      //"AMARILLO", "ROJO", "AZUL", "NARANJA", "VERDE", "NEGRO"
      case "AMARILLO":
        this.cambiarColorDeFondo('yellow');
        this.show = '';
        break;
      case "ROJO":
        this.cambiarColorDeFondo('red');
        this.show = '';
        break;
      case "AZUL":
        this.cambiarColorDeFondo('blue');
        this.show = '';
        break;
      case "NARANJA":
        this.cambiarColorDeFondo('orange');
        this.show = '';
        break;
      case "VERDE":
        this.cambiarColorDeFondo('green');
        this.show = '';
        break;
      case "NEGRO":
        this.cambiarColorDeFondo('black');
        this.show = '';
        break;
      default:
        this.cambiarColorDeFondo('white');
        this.show = valor;
        break;
    }

  }


  cambiarColorDeFondo(color: string) {
    // Obtener el elemento <div> por su ID
    const miDiv = document.getElementById('palabra');
    // Verificar si se encontró el elemento
    if (miDiv) {
      miDiv.style.backgroundColor = color;
    }
  }

  rndSort(a: any, b: any) {
    return 0.5 - Math.random();
  }


}
