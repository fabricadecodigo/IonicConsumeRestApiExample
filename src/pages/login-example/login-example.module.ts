import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginExamplePage } from './login-example';

@NgModule({
  declarations: [
    LoginExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginExamplePage),
  ],
})
export class LoginExamplePageModule {}
