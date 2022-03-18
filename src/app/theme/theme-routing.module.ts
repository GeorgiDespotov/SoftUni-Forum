import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NotFoundComponent } from '../not-found/not-found.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
    },
    {
        path: ':themeId',
        component: ThemeComponent
    },
    {
        path: 'add',
        component: NewThemeComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFalureRedirectUrl: '/login'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }