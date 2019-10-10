import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import {AddUserComponent} from './user/add-user.component';
import {AddTechnologyComponent} from './technology/add-technology.component';
import {TechnologyComponent} from './technology/technology.component';
import {SkillComponent} from './skill/skill.component';
import {AddSkillComponent} from './skill/add-skill.component';
import {AddPaymentComponent} from './payment/add-payment.component';
import {AddTrainingComponent} from './training/add-training.component';
import {TrainingComponent} from './training/training.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignupmComponent} from './signupm/signupm.component';
import {AdminsigninComponent} from './adminsignin/adminsignin.component';
import {UseradminComponent} from './useradmin/useradmin.component';
import {TrainingsuserComponent} from './trainingsuser/trainingsuser.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {CtrainingsadminComponent} from './ctrainingsadmin/ctrainingsadmin.component';
import {ComtrainingsuserComponent} from './comtraininguser/comtrainingsuser.component';
import {UserlandComponent} from './userland/userland.component';
import {UsermainComponent} from './usermain/usermain.component';

import {AdminlandComponent} from './adminland/adminland.component';
import {AdmintechComponent} from './admintech/admintech.component';
import {AdminntechComponent} from './adminntech/adminntech.component';
import {MentorComponent} from './mentor/mentor.component';
import {AdminnComponent} from './adminn/adminn.component';
import {AdminpayComponent} from './adminpay/adminpay.component';
import {AdminprofileComponent} from './adminprofile/adminprofile.component';
import {Admin1landComponent} from './admin1land/admin1land.component';
import {ViewpaymentComponent} from './viewpayment/viewpayment.component';
import {ViewtrainingComponent} from './viewtraining/viewtraining.component';
import {ViewtechnologyComponent} from './viewtechnology/viewtechnology.component';
import {ViewskillComponent} from './viewskill/viewskill.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { Useradmin1Component } from './user/useradmin1.component';
import { MentoradminComponent } from './mentor/mentoradmin.component';
import { PayComponent } from './viewtraining/pay.component';
import { MentortComponent } from './viewtraining/mentort.component';
import { SkilltComponent } from './viewtraining/skillt.component';
import { MentorviewtrainingComponent } from './mentorviewtraining/mentorviewtraining.component';
import { TrainingsearchComponent } from './viewtraining/trainingsearch.component';
import { Pay1Component } from './mentorviewtraining/pay1.component';
import { Mentort1Component } from './mentorviewtraining/mentort1.component';
import { SkillmComponent } from './mentorviewtraining/skillm.component';
import { PaymeComponent } from './viewtraining/payme.component ';
import { TechComponent } from './mentorviewtraining/tech.component';
import { PaybyComponent } from './mentorviewtraining/payby.component';
import { MentorviewComponent } from './mentor/mentorview.component';






const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupm', component: SignupmComponent },
  { path: 'useradmin', component: UseradminComponent },
  { path: 'trainingsuser', component: TrainingsuserComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'comtrainingsuser', component: ComtrainingsuserComponent },
  { path: 'userland', component: UserlandComponent },
  { path: 'mentorview', component:  MentorviewtrainingComponent },
  { path: 'adminland', component: AdminlandComponent },
  { path: 'admin1land', component: Admin1landComponent },
  { path: 'admintech', component: AdmintechComponent },
  { path: 'adminntech', component: AdminntechComponent },
  { path: 'adminn', component: AdminnComponent },
  { path: 'adminpay', component: AdminpayComponent },
  { path: 'adminprofile', component: AdminprofileComponent },
  { path: 'usermain', component: UsermainComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'mentors', component: MentorComponent },
  { path: 'adminsignin', component: AdminsigninComponent },
  { path: 'ctrainingsadmin', component: CtrainingsadminComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'trainings', component: TrainingComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  { path: 'technologies', component: TechnologyComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'viewpayments', component: ViewpaymentComponent },
  { path: 'viewtrainings', component: ViewtrainingComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'viewtechnologies', component: ViewtechnologyComponent },
  { path: 'viewskills', component: ViewskillComponent },
  { path: 'useradmin1', component: Useradmin1Component },
  { path: 'mentoradmin', component: MentoradminComponent },
  { path: 'pay', component: PayComponent },
  { path: 'mentort', component: MentortComponent },
  { path: 'skillt', component: SkilltComponent },
  { path: 'trainingsearch', component: TrainingsearchComponent },
  { path: 'pay1', component: Pay1Component },
  { path: 'payme', component: PaymeComponent },
  
  { path: 'mentort1', component: Mentort1Component },
  { path: 'tech', component: TechComponent },
 
  { path: 'skillm', component: SkillmComponent },
  { path: 'payby', component: PaybyComponent },
  { path: 'mentorview1', component: MentorviewComponent },
 
 
 







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
