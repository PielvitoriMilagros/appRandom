import { Component, OnInit } from '@angular/core';
import { Observable, interval, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {

  public valores: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "AMARILLO", "ROJO", "AZUL", "NARANJA", "VERDE", "NEGRO", "BLANCO"];
  public secuenciaRnd: string[] = [];
  public cantidadEstimulos : number = 8;  // Máx: 17

  public show = "Iniciando...";

  // constructor() { }







  constructor() {
    this.changeValue();
  }

  changeValue() {
    const changes = interval(5000) // Cambio cada 5 segundos
      .pipe(
        take(this.cantidadEstimulos),
        switchMap(() => {
          // Cambiar el valor
          this.show = this.secuenciaRnd[this.cantidadEstimulos];
          this.cantidadEstimulos--;
          return this.delay(2000); // Mantener el valor por 2 segundos
        })
      );

    changes.subscribe(() => {
      // Restaurar el valor por defecto
      if(this.cantidadEstimulos!=0){
        this.show = '...';
      } else {
        this.show = "FIN";
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





















  ngOnInit() {

    this.secuenciaRnd = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "AMARILLO", "ROJO", "AZUL", "NARANJA", "VERDE", "NEGRO", "BLANCO"];
    this.secuenciaRnd.sort(this.rndSort);

    console.log(this.secuenciaRnd);

    // setTimeout(() => {
    //   this.show = this.secuenciaRnd[this.cantidadEstimulos];
    //   this.cantidadEstimulos--;
    //   setTimeout(() => {
    //     this.show = "...";
    //     this.realizarCambiosPeriodicos();
    //   }, 2000);    
    // }, 2000);

  }

  realizarCambiosPeriodicos(){
    if (this.cantidadEstimulos >= 0) {
      setTimeout(() => {
        this.show = this.secuenciaRnd[this.cantidadEstimulos];
        this.cantidadEstimulos--;

        setTimeout(() => {
        this.show = "...";
        }, 2000);

        // Llamar de nuevo a la función para el próximo cambio
        this.realizarCambiosPeriodicos();

      }, 5000);

    } else {
      this.show = "FIN";
    }
  }



  rndSort(a: any, b: any) {
    return 0.5 - Math.random();
  }


}
