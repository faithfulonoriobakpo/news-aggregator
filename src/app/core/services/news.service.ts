import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EverythingPayload, HeadlinePayload, NewAPIResponse } from '../../shared/interfaces/NewsAPI';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  fetchHeadlines(data: HeadlinePayload): Observable<NewAPIResponse>{
    return this.http.get<NewAPIResponse>(
      `${environment.baseApiUrl}/top-headlines?q=${data.q}` +
      `&pageSize=${data.pageSize}&page=${data.page}&category=${data.category}&country=${data.country}`
    );
  }

  fetchEverything(data: EverythingPayload): Observable<NewAPIResponse>{
    return this.http.get<NewAPIResponse>(
      `${environment.baseApiUrl}/everything?q=${data.q}&from=${data.from}&to=${data.to}` +
        `&language=${data.language}&pageSize=${data.pageSize}&page=${data.page}&searchIn=title,description`,
    );
  }
}
