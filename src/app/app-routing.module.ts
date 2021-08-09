import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [{ path: '', component: NewsComponent },
{ path: 'sport', component: SportNewsComponent },
{ path: 'tech', component: TechNewsComponent },
{ path: 'buisness', component:BuisnessNewsComponent},
{ path: 'news/:title',component:NewsDetailComponent},
{ path: 'search/:word',component:SearchResultsComponent},
{ path: '**',component:NewsComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
