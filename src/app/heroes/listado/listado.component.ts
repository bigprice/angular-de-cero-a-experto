import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[]= ['Spidermin', 
                      'Ironman', 
                      'Hulk', 
                      'Thor', 
                      'Capitán América']
  heroeBorrado: string = '';


  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  } 

}
