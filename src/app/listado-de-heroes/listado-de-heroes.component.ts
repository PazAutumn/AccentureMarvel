import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'accen-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';

  constructor(private heroesService: HeroesService) { }

    ngOnInit() {
        this.heroesService.getHeroes();
    }

}
