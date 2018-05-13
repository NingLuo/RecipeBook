import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [       
        new Recipe(
            'Grilled Chicken', 
            'Grilled mustard rosemary chichen', 
            'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Mustard', 3)
            ]
        ),
        new Recipe(
            'MeatBalls', 
            'Sweish meatballs', 
            'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2crop.png',
            [
                new Ingredient('Ground beef', 1),
                new Ingredient('Swedish sauce', 1)
            ]
        )  
    ];

    getRecipes(){
        return this.recipes.slice();
    }   
}