import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeSliderComponent } from './components/recipe-slider/recipe-slider.component';

const routes: Routes = [
  { path: 'slider', component: RecipeSliderComponent },
  { path: '', redirectTo: 'slider', pathMatch: 'full' },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
