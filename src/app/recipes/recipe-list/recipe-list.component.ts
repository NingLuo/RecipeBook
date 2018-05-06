import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a second test', 'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2crop.png'),
    new Recipe('A Test Recipe 3', 'This is simply a third test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/18/0/jicama_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382538889194.jpeg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
