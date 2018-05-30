import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private shoppingListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }   

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}