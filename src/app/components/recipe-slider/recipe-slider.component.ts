import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-slider',
  templateUrl: './recipe-slider.component.html',
  styleUrls: ['./recipe-slider.component.css'],
})
export class RecipeSliderComponent implements OnInit {
  recipes?: Recipe[];
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    this.recipeService.getAll().subscribe(
      (data) => {
        this.recipes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveRecipes();
  }
}
