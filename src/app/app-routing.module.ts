import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SearchComponent } from './components/search/search.component';
import { StatsComponent } from './components/stats/stats.component';
const routes: Routes = [

  { path: 'home', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: SignUpComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
