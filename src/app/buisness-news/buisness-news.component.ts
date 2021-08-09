import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent implements OnInit {

  news:any[]=[];
  constructor(private newsService:NewsFetchService) { }

  ngOnInit(): void {
    this.newsService.getBuisnessNews()
      .subscribe((data) => {

        this.news = data.articles
        //this.articlesContainer = data.articles
        console.log(this.news)
        //console.log(this.articlesContainer)
      })
  }

}
