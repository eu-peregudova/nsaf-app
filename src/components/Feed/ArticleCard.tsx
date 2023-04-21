import React from 'react';
import {iArticle} from "./iArticle";
import {Link} from "react-router-dom";
import {encodeArticle} from "../Article/URLencoder";

function ArticleCard({ article } : { article: iArticle }) {

  return (
    <div>
      <img style={{height: 100 + 'px'}} src={article.urlToImage || `https://placehold.co/600x400?text=${article.source.name}`}
           onError={() => `https://placehold.co/600x400?text=${article.source.name}`}>
      </img>
      <h2>{article.title}</h2>
      <p>{article.source.name}</p>
      <p>{article.publishedAt}</p>
      <Link to={`/article/${encodeArticle(article)}`}>Read more</Link>
    </div>
  );
}

export default ArticleCard;
