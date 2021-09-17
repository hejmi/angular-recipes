import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes?: Recipe[];
  currentRecipe: Recipe = {};
  currentIndex = -1;
  title?: string;

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
    this.currentRecipe = {};
    this.currentIndex = -1;
  }
  setActiveRecipe(recipe: Recipe, index: number): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }
  searchTitle(): void {
    this.currentRecipe = {};
    this.currentIndex = -1;

    this.recipeService.findByTitle(this.title).subscribe(
      (data) => {
        this.recipes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
