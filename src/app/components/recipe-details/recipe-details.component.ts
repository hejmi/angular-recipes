import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { StepService } from 'src/app/services/step.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { Step } from 'src/app/models/step';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  currentRecipe: Recipe = {};
  recipe?: Recipe[];
  ingredients?: Ingredient[];
  steps?: Step[];

  constructor(
    private recipeService: RecipesService,
    private ingredientService: IngredientService,
    private stepService: StepService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    this.getIngredients();
    this.getSteps();
  }

  getRecipe(): void {
    this.recipeService.get(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.recipe = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.getRecipe();
    this.currentRecipe = {};
  }

  getIngredients(): void {
    this.ingredientService.get(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.ingredients = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSteps(): void {
    this.stepService.get(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.steps = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
