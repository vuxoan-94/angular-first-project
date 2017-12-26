import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Meat Powder Recipe Food Dishes Pork',
      'Delecious dish!',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Pork', 1),
        new Ingredient('Powder', 1)
      ]),
    new Recipe(
      'Chocolate Crinkles',
      'This is totally awesome',
      'http://images.media-allrecipes.com/userphotos/720x405/430444.jpg',
      [
        new Ingredient('Cocoa powder', 1),
        new Ingredient('Egg', 4)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //get a copy of recipes array instead of reference to it
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
