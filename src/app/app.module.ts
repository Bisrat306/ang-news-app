import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchNewsComponent } from './search-news/search-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    NewsComponent,
    TechNewsComponent,
    SportNewsComponent,
    BuisnessNewsComponent,
    SearchResultsComponent,
    SearchNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
