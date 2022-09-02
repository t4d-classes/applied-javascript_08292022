import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Color, NewColor } from '../../models/colors';
import { ColorsDataService } from '../../services/colors-data.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";

  colors: Color[] = [];

  constructor(private colorsData: ColorsDataService) { }

  ngOnInit(): void {
    this.colorsData.all().subscribe({
      next: colors => {
        this.colors = colors;
      },
    });
  }

  addColor(color: NewColor) {
    this.colorsData
      .append(color)
      .pipe(
        switchMap(() => this.colorsData.all())
      )
      .subscribe({
        next: colors => this.colors = colors,
      });
  }

}
