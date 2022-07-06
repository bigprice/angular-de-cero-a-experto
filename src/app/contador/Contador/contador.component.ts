import { Component } from "@andular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
    
        <button (click)="acumular(base);"> + 1 </button>
        
        <span> {{ numero }} </span>
        
        <button (click)="acumular(-base)"> - 1 </button>
`,
    styleUrls: ['']
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number): void{
      this.numero += valor; 
    }
}