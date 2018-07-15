export class LoggerService {
  private isProduction: boolean = false;

  log(msg: string): void{
    if(!this.isProduction){
      console.log(msg);
    }
  }
}
