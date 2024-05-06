import { Routes } from '@angular/router';
import { userAuthGuard } from './shared/guards/user-auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes')
    },
    {
        path: 'news',
        loadChildren: () => import('./pages/news/news.routes'),
        canActivate: [userAuthGuard]
    }
];
