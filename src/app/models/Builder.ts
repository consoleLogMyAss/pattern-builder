import {IBuilder} from '../interfaces/builder.interface';
import {ComplexObject} from './ComplexObject';

export class Builder implements IBuilder {
  private complexObject: ComplexObject;

  constructor() {
    this.complexObject = new ComplexObject();
  }

  setName(value: string): Builder {
    this.complexObject.name = value;
    return this;
  }

  setAge(value: number): Builder {
    this.complexObject.age = value;
    return this;
  }

  setJob(value: string): Builder {
    this.complexObject.job = value;
    return this;
  }

  setFriend(value: string): Builder {
    this.complexObject.friend = value;
    return this;
  }

  build(): ComplexObject {
    return this.complexObject;
  }
}
