import { Component } from '@angular/core';
import { Recipie } from '../recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrl: './recipie-list.component.css'
})
export class RecipieListComponent {
recipies: Recipie[]=[
  new Recipie('a test recipie' , 'a test' ,"https://www.uaex.uada.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg"),
  new Recipie('a test recipie' , 'a test' ,"https://www.uaex.uada.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg")

];
}
