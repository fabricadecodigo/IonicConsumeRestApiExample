import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openExampleCreateUser() {
    this.navCtrl.push('CreateUserExamplePage');
  }

  openExampleLogin() {
    this.navCtrl.push('LoginExamplePage');
  }

  openExampleCRUD() {
    this.navCtrl.push('UsersExamplePage');
  }

}
