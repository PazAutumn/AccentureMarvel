import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'accen-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString : string;

  constructor(private heroesService: HeroesService) { }

    ngOnInit() {
        this.heroesService.getHeroes();
    }

    submitSearch() {
      this.heroesService.getHeroes(this.searchString);
    }

    prevPage() {
      this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
    }
  
    nextPage() {
      this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
    }

}
