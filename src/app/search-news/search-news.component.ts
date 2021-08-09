import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {




  constructor(private fetchService:NewsFetchService, private router:Router) {
    this.router=router;
  }

  send(word:String){
    this.router.navigate(['/search',word]);
  }

  ngOnInit(): void {

  }

}
