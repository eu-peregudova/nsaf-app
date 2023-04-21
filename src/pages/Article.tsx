import React from 'react';
import {Header} from "../components/Header/Header";
import {useParams} from "react-router-dom";
import {decodeArticle} from "../components/Article/URLencoder";
import dateRead from "../commonUse/functions/dateRead";


function Article() {
  const { id } = useParams()

  const article = decodeArticle(id)

  return (
    <>
      <Header/>
      {article ? <>
        <img style={{height: 200 + 'px'}} src={article.urlToImage || `https://placehold.co/600x400?text=${article.source.name}`}/>
        <p>{article.title}</p>
        <p>Author: {article.author}</p>
        <p>Source: {article.source.name}</p>
        <p>Published at: {dateRead(article.publishedAt).date}; {dateRead(article.publishedAt).time}</p>
        {/*<p>{dateRead(article.publishedAt).date}</p>*/}
        {/*<p>{dateRead(article.publishedAt).time}</p>*/}
        <p>{article.content}</p>
        <a href={article.url}>Read full article</a>
      </>
      : <>
          <h2>Article you trying to reach don't exist here, please go to</h2>
          <a href="/">home page</a>
        </>}

    </>
  );
}

export default Article;
