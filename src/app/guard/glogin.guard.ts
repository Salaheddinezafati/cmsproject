import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {

    constructor(   private authService: AuthentificationService,
      private router: Router){}
  
   canActivate(): boolean {
      
      if (!this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }
  
    }
  
}
