import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm!: FormGroup;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.colorForm = this.fb.group({
      name: '',
      hexcode:'',
    });

  }

}
