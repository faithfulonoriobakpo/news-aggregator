import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { Article, HeadlinePayload, NewAPIResponse } from '../../../shared/interfaces/NewsAPI';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { finalize } from 'rxjs';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [CommonModule, TruncatePipe, NgxPaginationModule, LoaderComponent],
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.scss'
})
export class HeadlinesComponent implements OnInit {
  private newsService = inject(NewsService);
  
  page: number = 1;
  defaultPageSize: number = 15;
  totalArticles!: number;
  loading: boolean = false;
  articles!: Article[];
  searchText: string = '';

  ngOnInit(): void {
    this.getHeadlines();
  }

  getHeadlines(requestedPage = 1){
    const payload: HeadlinePayload = {
      category: 'general',
      q: this.searchText,
      page: requestedPage,
      pageSize: this.defaultPageSize,
      country: 'us'
    };

    this.loading = true;
 
    this.newsService.fetchHeadlines(payload)
    .pipe(finalize(() => this.loading = false))
    .subscribe({
      next: (res: NewAPIResponse) => {
        this.articles = res.articles;
        this.totalArticles = res.totalResults;
        this.page = requestedPage
      },
      error: () => {}
    });
  }

  pageChanged(event: number){
    this.getHeadlines(event)
  }
}
