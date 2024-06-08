import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './gaurds/login.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchByCityComponent } from './Modules/applicationModule/components/search-by-city/search-by-city.component';
import { DashboardComponent } from './Modules/frontendModule/dashboard/dashboard.component';
import { WatchComponent } from './Modules/frontendModule/watch/watch.component';
import { EditProfileComponent } from './Modules/userModule/edit-profile/edit-profile.component';


import { LoginComponent } from './Modules/userModule/login/login.component';
import { ProfileComponent } from './Modules/userModule/profile/profile.component';
import { RegisterComponent } from './Modules/userModule/register/register.component';

// Routing section
const routes: Routes = [
   {
      path: '', component:HomepageComponent
    },
    
  {
     path: 'login', component: LoginComponent 
    },
  
  {
    path: 'dashboard',component: DashboardComponent , //canActivate:[LoginGuard]
  },
  {
    path: 'register',component: RegisterComponent
  },
  {
    path: 'watch', component:WatchComponent , //canActivate:[LoginGuard]
  },
  {
    path: 'profile', component:ProfileComponent ,// canActivate:[LoginGuard]
  },
  {
    path: 'editProfile', component:EditProfileComponent ,// canActivate:[LoginGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
