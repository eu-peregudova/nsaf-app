import React from 'react';
import {Header} from "../components/Header/Header";
import {useParams} from "react-router-dom";
import {decodeArticle} from "../components/Article/URLencoder";


function Article() {
  const { id } = useParams()

  const article = decodeArticle(id)

  return (
    <>
      <Header/>
      {article ? <>
        <img src={article.urlToImage}/>
        <p>{article.title}</p>
        <p>Author: {article.author}</p>
        <p>Source: {article.source.name}</p>
        <p>{article.publishedAt}</p>
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
