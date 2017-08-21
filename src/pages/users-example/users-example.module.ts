import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersExamplePage } from './users-example';

@NgModule({
  declarations: [
    UsersExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(UsersExamplePage),
  ],
})
export class UsersExamplePageModule {}
