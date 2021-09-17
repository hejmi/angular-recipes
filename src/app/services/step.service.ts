import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Step } from '../models/step';

const baseUrl = 'http://localhost:3002/api';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  constructor(private http: HttpClient) {}

  get(id: any): Observable<Step[]> {
    return this.http.get<Step[]>(`${baseUrl}/getStepsFromId/${id}`);
  }
}
