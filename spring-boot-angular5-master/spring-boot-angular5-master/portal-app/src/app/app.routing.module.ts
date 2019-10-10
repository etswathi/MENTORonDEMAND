import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignupmComponent} from './signupm/signupm.component';
import {AdminsigninComponent} from './adminsignin/adminsignin.component';
import {UseradminComponent} from './useradmin/useradmin.component';
import {TrainingsuserComponent} from './trainingsuser/trainingsuser.component';
import {CtrainingsuserComponent} from './ctraininguser/ctrainingsuser.component';
import {CtrainingsadminComponent} from './ctrainingsadmin/ctrainingsadmin.component';
import {ComtrainingsuserComponent} from './comtraininguser/comtrainingsuser.component';
import {UserlandComponent} from './userland/userland.component';
import {UsermainComponent} from './usermain/usermain.component';
import {UsercontactComponent} from './usercontact/usercontact.component';
import {AdminlandComponent} from './adminland/adminland.component';
import {AdmintechComponent} from './admintech/admintech.component';
import {AdminntechComponent} from './adminntech/adminntech.component';
import {AdminnComponent} from './adminn/adminn.component';
import {AdminpayComponent} from './adminpay/adminpay.component';
import {AdminprofileComponent} from './adminprofile/adminprofile.component';
import {Admin1landComponent} from './admin1land/admin1land.component';
const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupm', component: SignupmComponent },
  { path: 'useradmin', component: UseradminComponent },
  { path: 'trainingsuser', component: TrainingsuserComponent },
  { path: 'ctrainingsuser', component: CtrainingsuserComponent },
  { path: 'comtrainingsuser', component: ComtrainingsuserComponent },
  { path: 'userland', component: UserlandComponent },
  { path: 'usercontact', component: UsercontactComponent },
  { path: 'adminland', component: AdminlandComponent },
  { path: 'admin1land', component: Admin1landComponent },
  { path: 'admintech', component: AdmintechComponent },
  { path: 'adminntech', component: AdminntechComponent },
  { path: 'adminn', component: AdminnComponent },
  { path: 'adminpay', component: AdminpayComponent },
  { path: 'adminprofile', component: AdminprofileComponent },
  { path: 'usermain', component: UsermainComponent },
  { path: 'adminsignin', component: AdminsigninComponent },
  { path: 'ctrainingsadmin', component: CtrainingsadminComponent },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
