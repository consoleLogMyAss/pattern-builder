import {Builder} from './Builder';


export class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct() {
    return this.builder
      .setAge(25)
      .setFriend('Max')
      .setJob('Noda')
      .setName('Ivan')
      .build();
  }
}
