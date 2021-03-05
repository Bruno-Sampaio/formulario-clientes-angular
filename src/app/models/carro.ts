import { ThisReceiver } from "@angular/compiler";

export class Carro {

    velocidade: number = 0;

    //acelerar(): boolean{
        //return true;
    //}
    acelerar(){
        this.velocidade++;
        console.log('velocidade attual: ', this.velocidade);
    }

    desacelerar(){
        this.velocidade--;
        console.log('velocidade atual: ', this.velocidade);
    }

}