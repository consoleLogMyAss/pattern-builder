export interface IBuilder {
  setName(value: string): void;
  setAge(value: number): void;
  setFriend(value: string): void;
  setJob(value: string): void;
  build(): object
}
