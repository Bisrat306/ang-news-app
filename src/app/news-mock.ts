export interface News{
  status:String,
  totalResults:Number,
  articles: articlesContainer[]
}

export interface articlesContainer {
  articles: Array<Object>
}
export interface mainPart{
  author:String,
  content:String,
  description:String,
  publishedAt:String,
  source:Array<Object>,
  title:String,
  url:String,
  urlToImage:String
}
