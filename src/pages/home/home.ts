import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  openCreateAccount() {
    this.navCtrl.push('CreateAccountPage');
  }

  openLogin() {
    this.navCtrl.push('LoginPage');
  }

  openListUsers() {
    this.navCtrl.push('UserListPage');
  }
}
