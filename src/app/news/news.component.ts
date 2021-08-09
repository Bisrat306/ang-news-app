import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';
import { News, articlesContainer } from '../news-mock';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  sportsNews:any[]=[];
  buisnessNews:any[]=[];
  articlesContainer : any[] = []
  constructor(private newsService: NewsFetchService,) {
  }

  ngOnInit(): void {
    this.newsService.getTechNews()
      .subscribe((data) => {

        this.news = data.articles
        //this.news=Object.entries(data.articles).slice(1, 4)
        //this.articlesContainer = data.articles
        console.log(this.news)
        //console.log(this.articlesContainer)
      })
      this.newsService.getSportNews()
      .subscribe((data) => {

        this.sportsNews = data.articles
      })
      this.newsService.getBuisnessNews()
      .subscribe((data) => {

        this.buisnessNews = data.articles
      })
  }


}
