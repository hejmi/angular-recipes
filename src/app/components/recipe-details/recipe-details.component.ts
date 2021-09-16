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

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.params.id);
  }

  getRecipe(id: number): void {
    this.recipeService.get(id).subscribe(
      (data) => {
        this.currentRecipe = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
