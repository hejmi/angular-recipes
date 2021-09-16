import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  currentRecipe: Recipe = {};
  recipe?: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.recipeService.get(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.recipe = data;
        console.log(data);
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
}
