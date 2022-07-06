import { component } from "@angular/core";

@component{
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
}
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 35;

    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }   

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }
}