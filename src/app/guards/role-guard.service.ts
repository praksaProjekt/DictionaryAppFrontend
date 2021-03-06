import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from '../components/header/header.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthGuardService, public router: Router, private jwtHelper: JwtHelperService) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('jwt') || "";
    const tokenPayload = decode(token);
    if (this.isUserAuthenticated() && (<any>tokenPayload).role == 'admin') {
      return true;
    }
    this.router.navigate(["/admin-alert"]);
    return false;
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
}