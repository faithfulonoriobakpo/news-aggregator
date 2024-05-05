import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { userAuthGuard } from './shared/guards/user-auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'app',
        loadChildren: () => import('./pages/user/user.routes'),
        canActivate: [userAuthGuard]
    }
];
