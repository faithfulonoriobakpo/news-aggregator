import { AllNewsArticlesComponent } from './all-news-articles/all-news-articles.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NewsComponent } from './news.component';

export default [
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: 'all',
                component: AllNewsArticlesComponent,
            },
            {
                path: 'headlines',
                component: HeadlinesComponent,
            }
        ]
    }
];
