import React from 'react';
import {iArticle} from "../../commonUse/types/iArticle";
import {Link} from "react-router-dom";
import {encodeArticle} from "../Article/URLencoder";
import dateRead from "../../commonUse/functions/dateRead";

function ArticleCard({ article } : { article: iArticle }) {

  return (
    <div>
      <img style={{height: 100 + 'px'}} src={article.urlToImage || `https://placehold.co/600x400?text=${article.source.name}`}
           onError={({ currentTarget }) => {
             currentTarget.src=`https://placehold.co/600x400?text=${article.source.name}`;
           }}>
      </img>
      <h2>{article.title}</h2>
      <p>{article.source.name}</p>
      <p>{dateRead(article.publishedAt).time}, {dateRead(article.publishedAt).date}</p>
      <Link to={`/article/${encodeArticle(article)}`}>Read more</Link>
    </div>
  );
}

export default ArticleCard;
