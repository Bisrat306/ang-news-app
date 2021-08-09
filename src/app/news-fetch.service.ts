import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concat, Observable, of,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { News } from './news-mock';

@Injectable({
  providedIn: 'root'
})
export class NewsFetchService {
  private techNewsUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4347d1b4f34547fbb80b6beca264a084";
  private sportNewsUrl="https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=4347d1b4f34547fbb80b6beca264a084";
  private buisnessNewsUrl="https://newsapi.org/v2/top-headlines?category=business&apiKey=4347d1b4f34547fbb80b6beca264a084";
  key_word:String='';

  constructor(private http:HttpClient) {}

  getTechNews():Observable<any> {
    return this.http.get<any>(this.techNewsUrl)
  }
  getSportNews():Observable<any> {
    return this.http.get<any>(this.sportNewsUrl)
  }
  getBuisnessNews():Observable<any> {
    return this.http.get<any>(this.buisnessNewsUrl)
  }
  getSearchNews(word:any):Observable<any>{
    if(!word.trim()){
      return of([])
    }
    return this.http.get<any>("https://newsapi.org/v2/everything?q="+word+"&apiKey=4347d1b4f34547fbb80b6beca264a084")
  }

}
