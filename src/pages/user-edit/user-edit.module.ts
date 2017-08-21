import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditPage } from './user-edit';

@NgModule({
  declarations: [
    UserEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditPage),
  ],
})
export class UserEditPageModule {}
