import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NewsComponent } from 'src/app/news/news.component';
import {Welcome} from '@storybook/angular/demo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsFetchService } from '../news-fetch.service';


storiesOf('News Component', module)
.addDecorator(
  moduleMetadata({
    imports:[HttpClient],
    declarations:[NewsComponent],
    providers:[NewsFetchService]
  })
)
.add('Default',()=>{
  return {
    template:'<app-news></app-news>',
    props:{}
  }
})
