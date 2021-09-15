import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const baseUrl = 'http://localhost:3002/api';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${baseUrl}/get`);
  }

  get(id: any): Observable<Recipe> {
    return this.http.get(`${baseUrl}/getFromId/${id}`);
  }

  findByTitle(title: any): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${baseUrl}/get/?title=${title}`);
  }
}
