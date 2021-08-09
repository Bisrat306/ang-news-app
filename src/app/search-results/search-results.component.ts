import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFetchService } from '../news-fetch.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  word="Olympic";
  news:any[]=[];
  constructor(private route: ActivatedRoute, private newsService: NewsFetchService) { }

  ngOnInit(): void {
    this.newsService.getSearchNews(this.word)
      .subscribe((data) => {
        this.news = data.articles
        //this.articlesContainer = data.articles
        console.log(this.news)
        //console.log(this.articlesContainer)
      })
    }

}
