export interface IUser {
  id: number;
  name: string;
  age: number;
  job: {
    title: string;
    language: string;
  }
}
