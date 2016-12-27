import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy', 'dummy','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwXk0cZhUWUWA3p7_H4YwMm0mWNM7kmmpNFfOAbguVmF5zRrFg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }


}
