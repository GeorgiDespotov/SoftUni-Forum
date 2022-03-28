import { ErrorHandler, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";


class GlobalErrorHandler implements ErrorHandler {

    constructor(private router: Router) { }

    handleError(error: Error): void {
        console.log(error);
        this.router.navigate(['/error'], { queryParams: { error: 'OOOPS!' } });

    }
}

export const globalErrorHandlerProvider: Provider = {
    provide: ErrorHandler,
    useFactory: (router: Router) => new GlobalErrorHandler(router),
    deps: [Router]
}