import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

const baseUrl = 'http://localhost:3002/api';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private http: HttpClient) {}

  get(id: any): Observable<Ingredient> {
    return this.http.get(`${baseUrl}/getIngredientsFromId/${id}`);
  }
}
