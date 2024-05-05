import { userAuthGuard } from '../../shared/guards/user-auth.guard';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';

export default [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.routes')
            }
        ]
    }
];
