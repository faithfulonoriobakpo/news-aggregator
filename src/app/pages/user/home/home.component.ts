import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { HeadlinePayload } from '../../../shared/interfaces/NewsAPI';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private newsService = inject(NewsService);

  news: any;

  ngOnInit(): void {
    this.getEverything();
  }

  getHeadlines(){
    const payload: HeadlinePayload = {};
 
    this.newsService.fetchHeadlines(payload).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: () => {}
    });
  }

  getEverything(){
    const payload: HeadlinePayload = {};
 
    this.newsService.fetchEverything(payload).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: () => {}
    });
  }
}
