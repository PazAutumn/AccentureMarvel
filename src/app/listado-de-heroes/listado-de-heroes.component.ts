import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';

@Component({
  selector: 'accen-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public heroes: Array<Heroe> = [];

  constructor() { }

  ngOnInit() {
  }

}
