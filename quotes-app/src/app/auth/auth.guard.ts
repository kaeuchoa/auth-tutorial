import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable()

// export class AuthGuard implements CanActivate {
    
//     constructor(
//         private authService: AuthService,
//         private router: Router
//     ) {}
    
//     canActivate(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//             if (!this.authService.isLoggedIn) {
//                 this.router.navigate(['/']);
//                 return false;
//             }
//         return true;
//     }

// }
