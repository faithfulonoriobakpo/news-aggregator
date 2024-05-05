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

  getHeaders(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return {headers: headers}
  }

  fetchHeadlines(data: HeadlinePayload): Observable<NewAPIResponse>{
    return this.http.post<NewAPIResponse>(
      `${environment.baseApiUrl}/get-headlines`,
      data,
      this.getHeaders()
    );
  }

  fetchEverything(data: EverythingPayload): Observable<NewAPIResponse>{
    return this.http.post<NewAPIResponse>(
      `${environment.baseApiUrl}/get-everything`,
      data,
      this.getHeaders()
    );
  }
}
