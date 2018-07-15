export class UserService {

  arr: string[] = [];

  addUser(name: string){
    this.arr.push(name);
  }
}
