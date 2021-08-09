import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFetchService } from '../news-fetch.service';
import { News, mainPart } from '../news-mock';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  x: any = {};
  news: any[] = [];
  newss: any[] = [];
  foundNews: any[] = [];
  constructor(private route: ActivatedRoute, private newsService: NewsFetchService) { }

  ngOnInit(): void {
  this.newsService.getTechNews()
      .subscribe((data) => {

        this.newss = data.articles;
        //this.articlesContainer = data.articles
        console.log(this.newss);
        //console.log(this.articlesContainer)

        const routeParams = this.route.snapshot.paramMap;
        console.log("Route Params:", routeParams);
        const articleTitle = String(routeParams.get('title'));
        console.log("Article Title", articleTitle);
        console.log("Full Fetched", this.newss);
        //for (let nws of this.newss) {
          // this.x = this.newss.find(() => nws.title === articleTitle)
          // if (this.foundNews) {
          //   this.x = this.foundNews
          // }
        //}
        this.x = this.newss.find((e) => e.title === articleTitle)
        console.log(this.x);
        //this.foundNews = this.newss.find(foundNews => this.newss.title === articleTitle);

      })




  }


}
