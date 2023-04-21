export interface iArticle {
  author: string
  content: string
  description: string
  publishedAt: string
  source: {
    id: never,
    name: string
  }
  title: string
  url: string
  urlToImage: string
}
