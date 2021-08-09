import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {
  news:any[]=[];
  constructor(private newsService:NewsFetchService) { }

  ngOnInit(): void {
    this.newsService.getSportNews()
      .subscribe((data) => {

        this.news = data.articles
        //this.articlesContainer = data.articles
        console.log(this.news)
        //console.log(this.articlesContainer)
      })
  }

}
