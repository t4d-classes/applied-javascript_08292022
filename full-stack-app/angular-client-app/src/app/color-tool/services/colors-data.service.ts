import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color, NewColor } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsDataService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http
      .get<Color[]>('http://localhost:3050/colors');
  }

  append(newColor: NewColor) {
    return this.http
      .post<Color>('http://localhost:3050/colors', newColor);
  }
}
