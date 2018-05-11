import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [       
        new Recipe('A Test Recipe 1', 'This is simply a test', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a second test', 'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2crop.png'),
        new Recipe('A Test Recipe 3', 'This is simply a third test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/18/0/jicama_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382538889194.jpeg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }   
}