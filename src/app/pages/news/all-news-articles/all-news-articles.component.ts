import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { Article, EverythingPayload, NewAPIResponse } from '../../../shared/interfaces/NewsAPI';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription, debounceTime, finalize, map } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-all-news-articles',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TruncatePipe, NgxPaginationModule, LoaderComponent],
  templateUrl: './all-news-articles.component.html',
  styleUrl: './all-news-articles.component.scss'
})
export class AllNewsArticlesComponent implements OnInit, OnDestroy {
  private newsService = inject(NewsService);
  
  page: number = 1;
  defaultPageSize: number = 15;
  totalArticles!: number;
  loading: boolean = false;
  articles!: Article[];
  searchText: string = 'news';

  searchForm!: FormGroup;

  subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.getEverything();
    this.setupSearch();
  }

  setupSearch(){
    this.searchForm = this.fb.group({
      searchField: ['']
    });

    this.handleSearch();
  }

  getEverything(requestedPage = 1){
    const payload: EverythingPayload = {
      q: this.searchText,
      page: this.page,
      pageSize: this.defaultPageSize,
      language: 'en',
    };

    this.loading = true;
 
    this.newsService.fetchEverything(payload)
    .pipe(finalize(() => this.loading = false))
    .subscribe({
      next: (res: NewAPIResponse) => {
        this.articles = res.articles;
        this.totalArticles = res.totalResults;
        this.page = requestedPage;
      },
      error: () => {} 
    });
  }

  pageChanged(event: number){
    this.getEverything(event)
  }

  handleSearch(){
    const searchControl = this.searchForm.get('searchField');

    searchControl?.valueChanges.pipe(
      debounceTime(1000),
      map(searchValue => {
          this.searchText = searchValue;
          this.getEverything();
        }
      )
    ).subscribe();
  }

  ngOnDestroy(): void {
    // destroy subscriptions
  }
}
