import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {TrainingsuserService} from './trainingsuser/trainingsuser.service';
import {UseradminService} from './useradmin/useradmin.service';
import {UserlandService} from './userland/userland.service';
import {UsercontactService} from './usercontact/usercontact.service';
import {AdminlandService} from './adminland/adminland.service';
import {Admin1landService} from './admin1land/admin1land.service';
import {AdminpayService} from './adminpay/adminpay.service';
import {AdminprofileService} from './adminprofile/adminprofile.service';
import {AdmintechService} from './admintech/admintech.service';
import {AdminntechService} from './adminntech/adminntech.service';
import {AdminnService} from './adminn/adminn.service';
import {SigninService} from './signin/signin.service';
import {AdminsigninService} from './adminsignin/adminsignin.service';
import {SignupService} from './signup/signup.service';
import {SignupmService} from './signupm/signupm.service';
import {CtrainingsuserService} from './ctraininguser/ctrainingsuser.service';
import {CtrainingsadminService} from './ctrainingsadmin/ctrainingsadmin.service';
import {ComtrainingsuserService} from './comtraininguser/comtrainingsuser.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';
import {SigninComponent} from './signin/signin.component';
import {AdminsigninComponent} from './adminsignin/adminsignin.component';
import {SignupComponent} from './signup/signup.component';
import {SignupmComponent} from './signupm/signupm.component';
import {UseradminComponent} from './useradmin/useradmin.component';
import {UserlandComponent} from './userland/userland.component';
import {UsermainComponent} from './usermain/usermain.component';
import {UsercontactComponent} from './usercontact/usercontact.component';
import {AdminlandComponent} from './adminland/adminland.component';
import {Admin1landComponent} from './admin1land/admin1land.component';
import {AdmintechComponent} from './admintech/admintech.component';
import {AdminntechComponent} from './adminntech/adminntech.component';
import {AdminnComponent} from './adminn/adminn.component';
import {AdminpayComponent} from './adminpay/adminpay.component';
import {AdminprofileComponent} from './adminprofile/adminprofile.component';
import {TrainingsuserComponent} from './trainingsuser/trainingsuser.component';
import { UserComponent } from './user/user.component';
import { CtrainingsuserComponent } from './ctraininguser/ctrainingsuser.component'
import { CtrainingsadminComponent } from './ctrainingsadmin/ctrainingsadmin.component'
import { ComtrainingsuserComponent } from './comtraininguser/comtrainingsuser.component'
import { UsermainService } from './usermain/usermain.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    SigninComponent,
    SignupComponent,
    SignupmComponent,
    UseradminComponent,
    TrainingsuserComponent,
    CtrainingsuserComponent,
    ComtrainingsuserComponent,
    UserlandComponent,
    AdminlandComponent,
    Admin1landComponent,
    AdmintechComponent,
    AdminntechComponent,
    AdminnComponent,
    AdminpayComponent,
    AdminprofileComponent,
    UsercontactComponent,
    UsermainComponent,
    AdminsigninComponent,
    CtrainingsadminComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,SignupmService,AdminnService,AdminntechService,Admin1landService,SigninService,CtrainingsadminService,SignupService,,UseradminService,AdminsigninService,UsercontactService,UserlandService,AdminpayService,AdminprofileService,AdminlandService,AdmintechService,TrainingsuserService,CtrainingsuserService,ComtrainingsuserService,UsermainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
