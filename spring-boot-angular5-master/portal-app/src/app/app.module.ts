import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {TechnologyService} from './technology/technology.service';
import {TechnologyComponent} from './technology/technology.component';
import {AddTechnologyComponent} from './technology/add-technology.component';
import {TrainingsuserService} from './trainingsuser/trainingsuser.service';
import {UseradminService} from './useradmin/useradmin.service';
import {UserlandService} from './userland/userland.service';
import {AdminlandService} from './adminland/adminland.service';
import {Admin1landService} from './admin1land/admin1land.service';
import {AdminpayService} from './adminpay/adminpay.service';
import {AdminprofileService} from './adminprofile/adminprofile.service';
import {AdmintechService} from './admintech/admintech.service';
import {AdminloginService} from './adminlogin/adminlogin.service';
import {AdminntechService} from './adminntech/adminntech.service';
import {AdminnService} from './adminn/adminn.service';
import {SigninService} from './signin/signin.service';
import {AdminsigninService} from './adminsignin/adminsignin.service';
import {SignupService} from './signup/signup.service';
import {SignupmService} from './signupm/signupm.service';
import {UserprofileService} from './userprofile/userprofile.service';
import {CtrainingsadminService} from './ctrainingsadmin/ctrainingsadmin.service';
import {ComtrainingsuserService} from './comtraininguser/comtrainingsuser.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import {AddTrainingComponent} from './training/add-training.component';
import {TrainingComponent} from './training/training.component';
import {AddPaymentComponent} from './payment/add-payment.component';
import {SigninComponent} from './signin/signin.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AdminsigninComponent} from './adminsignin/adminsignin.component';
import {SignupComponent} from './signup/signup.component';
import {SignupmComponent} from './signupm/signupm.component';
import {UseradminComponent} from './useradmin/useradmin.component';
import {UserlandComponent} from './userland/userland.component';
import {MentorComponent} from './mentor/mentor.component';
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
import { PaymentComponent } from './payment/payment.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { ViewskillComponent } from './viewskill/viewskill.component';
import { ViewtrainingComponent } from './viewtraining/viewtraining.component';
import { ViewtechnologyComponent } from './viewtechnology/viewtechnology.component';
import { UserprofileComponent } from './userprofile/userprofile.component'
import { CtrainingsadminComponent } from './ctrainingsadmin/ctrainingsadmin.component'
import { ComtrainingsuserComponent } from './comtraininguser/comtrainingsuser.component'
import { UsermainService } from './usermain/usermain.service';
import { MentorService } from './mentor/mentor.service';
import { SkillComponent } from './skill/skill.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { PaymentService } from './payment/payment.service';
import { TrainingService } from './training/training.service';
import { SkillService } from './skill/skill.service';
import { ViewpaymentService } from './viewpayment/viewpayment.service';
import { ViewtrainingService } from './viewtraining/viewtraining.service';
import { ViewtechnologyService } from './viewtechnology/viewtechnology.service';
import { ViewskillService } from './viewskill/viewskill.service';
import { Useradmin1Component } from './user/useradmin1.component';
import { MentoradminComponent } from './mentor/mentoradmin.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { PayComponent } from './viewtraining/pay.component';
import { MentortComponent } from './viewtraining/mentort.component';
import { SkilltComponent } from './viewtraining/skillt.component';
import { MentorviewtrainingComponent } from './mentorviewtraining/mentorviewtraining.component';
import { MentorviewtrainingService } from './mentorviewtraining/mentorviewtraining.service';
import { TrainingsearchComponent } from './viewtraining/trainingsearch.component';
import { Pay1Component } from './mentorviewtraining/pay1.component';
import { Mentort1Component } from './mentorviewtraining/mentort1.component';
import { SkillmComponent } from './mentorviewtraining/skillm.component';
import { PaymeComponent } from './viewtraining/payme.component ';
import { TechComponent } from './mentorviewtraining/tech.component';
import { PaybyComponent } from './mentorviewtraining/payby.component';
import { MentorviewComponent } from './mentor/mentorview.component';











@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    AddPaymentComponent,
    TechnologyComponent,
    AddTechnologyComponent,
    PaymentComponent,
    TrainingComponent,
    AddMentorComponent,
    AddTrainingComponent,
    SigninComponent,
    SignupComponent,
    SignupmComponent,
    UseradminComponent,
    TrainingsuserComponent,
    UserprofileComponent,
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
    MentorComponent,
    SkillComponent,
    AddSkillComponent,
    ViewpaymentComponent,
    ViewtrainingComponent,
    ViewtechnologyComponent,
    ViewskillComponent,
    AdminloginComponent,
    Useradmin1Component,
    MentoradminComponent,
    MentorviewtrainingComponent,
    PayComponent,
    MentortComponent,
    SkilltComponent,
    TrainingsearchComponent,
    Pay1Component,
    PaymeComponent,
    Mentort1Component,
    SkillmComponent,
    TechComponent,
    PaybyComponent,
    MentorviewComponent,
  
  
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgCircleProgressModule.forRoot({
      radius: 25,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 200,
      
    })




  ],
  providers: [UserService,MentorviewtrainingService,ViewskillService,ViewtechnologyService,AdminloginService,ViewtrainingService,ViewpaymentService,SkillService,TechnologyService,TrainingService,PaymentService,MentorService,SignupmService,AdminnService,AdminntechService,Admin1landService,SigninService,CtrainingsadminService,SignupService,,UseradminService,AdminsigninService,UserlandService,AdminpayService,AdminprofileService,AdminlandService,AdmintechService,TrainingsuserService,UserprofileService,ComtrainingsuserService,UsermainService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
