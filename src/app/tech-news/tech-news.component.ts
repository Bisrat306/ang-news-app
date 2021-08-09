import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  news: any[]=[];
  constructor(private newsService:NewsFetchService) { }

  ngOnInit(): void {
    this.newsService.getTechNews()
      .subscribe((data) => {

        this.news = data.articles
        //this.articlesContainer = data.articles
        console.log(this.news)
        //console.log(this.articlesContainer)
      })
  }

}
