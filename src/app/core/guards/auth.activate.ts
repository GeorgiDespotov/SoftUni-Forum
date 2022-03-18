import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/survices/user.service";

@Injectable()
export class AuthActivate implements CanActivate {

    constructor(private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const {authenticationRequired, authenticationFalureRedirectUrl } = route.data;

        if (typeof authenticationRequired === 'boolean' && 
        authenticationRequired === this.userService.isLoged) { 
            
            return true;
        }
        let authRedirectUrl = authenticationFalureRedirectUrl;
        if (authenticationRequired) {
            const logniRedirectUrl = route.routeConfig?.path;
            // const logiRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');
            authRedirectUrl += `?redirectUrl=${logniRedirectUrl}`;
        }

        return this.router.parseUrl(authRedirectUrl || '/');
    }
    
}