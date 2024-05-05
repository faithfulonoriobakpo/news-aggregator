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
            }
        ]
    }
];
