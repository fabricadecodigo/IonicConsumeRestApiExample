import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserExamplePage } from './create-user-example';

@NgModule({
  declarations: [
    CreateUserExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUserExamplePage),
  ],
})
export class CreateUserExamplePageModule {}
