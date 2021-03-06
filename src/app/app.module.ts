import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { RecipeSliderComponent } from './components/recipe-slider/recipe-slider.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeSliderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
