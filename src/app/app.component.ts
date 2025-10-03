import {Component, OnInit} from '@angular/core';
import { Builder as BuilderS } from './models/Builder';
import {Director} from './models/Director';
import {ComplexObject} from './models/ComplexObject';
import { Builder, builder } from './handlers/universal-builder';

type TUser = {
  name: string,
  age: number,
  job: string,
}

type TCard = {
  amount: number,
  title: string,
  description: string,
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public builderS: BuilderS = new BuilderS();
  public director: Director = new Director(this.builderS);

  public objConfig: ComplexObject = this.director.construct();

  constructor() {
    console.log(this.objConfig);
  }

  ngOnInit(): void {
    const myUserData = builder<Builder<TUser>>()
      .setAge(25)
      .setName('Max')
      .setJob('Frontend developer')
      .build();

    console.log(myUserData);

    const myCardData = builder<Builder<TCard>>()
      .setAmount(20)
      .setTitle('Pay this cookie')
      .setDescription('This is descriptions')
      .build();

    console.log(myCardData);
  }
}
