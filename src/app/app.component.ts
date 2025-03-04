import { Component } from '@angular/core';
import { Builder } from './models/Builder';
import {Director} from './models/Director';
import {ComplexObject} from './models/ComplexObject';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public builder: Builder = new Builder();
  public director: Director = new Director(this.builder);

  public objConfig: ComplexObject = this.director.construct();

  constructor() {
    console.log(this.objConfig)
  }
}
