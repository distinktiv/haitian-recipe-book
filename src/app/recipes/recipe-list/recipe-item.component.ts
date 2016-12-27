import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId;
 
  constructor() { }

  ngOnInit() {
  }

}
