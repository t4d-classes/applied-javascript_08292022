import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from '../../models/colors';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  mainHeaderText = "Color Tool"

  get upperCaseHeaderText() {
    return this.mainHeaderText.toUpperCase();
  }

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addColor(color: NewColor) {
    this.colors = [
      ...this.colors,
      {
        ...color,
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
      },
    ];
  }

}
