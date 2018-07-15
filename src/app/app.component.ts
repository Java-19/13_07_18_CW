import { Component } from '@angular/core';
import {LoggerService} from '../services/logger.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[LoggerService,UserService]
  providers:[LoggerService]
})
export class AppComponent {
  text = '';
  // logger: LoggerService;

  constructor(private logger: LoggerService, private userService: UserService){
    // this.logger = new LoggerService();
  }
  btnClicked() {
    this.logger.log(this.text);
    this.userService.addUser(this.text);
    this.text = '';
  }
}
