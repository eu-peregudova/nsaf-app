import React from 'react';
import {Header} from "../components/Header/Header";
import {useParams} from "react-router-dom";
import {decodeArticle} from "../components/Article/URLencoder";
import dateRead from "../commonUse/functions/dateRead";
import Footer from "../components/Footer/Footer";


function Article() {
  const { id } = useParams()

  const article = decodeArticle(id)

  return (
    <div className="max-w-2xl m-auto h-screen flex flex-col">
      <div className="flex-grow flex-shrink-0 basis-auto">
      <Header/>
      {article ?
        <main className="max-w-2xl m-auto mx-4">
          <div className="">
            <img className="h-auto rounded-lg"
                 src={article.urlToImage || `https://placehold.co/600x400?text=${article.source.name}`}/>
            <h2 className="text-2xl font-extrabold">{article.title}</h2>
            <div className="my-5 flex justify-between">
              <div>
                <p>Author: {article.author}</p>
                <p>Source: {article.source.name}</p>
              </div>
              <div>
                <p className="text-right text-gray-500 italic">{dateRead(article.publishedAt).date}</p>
                <p className="text-right text-gray-500 italic">{dateRead(article.publishedAt).time}</p>
              </div>
            </div>
            <p className="block mb-6 text-lg font-normal text-gray-700">{article.description}</p>
            <p className="block mb-6 text-lg font-normal text-gray-700">{article.content}</p>
            <a className="my-3 text-base font-medium text-violet-500 hover:text-violet-900 hover:underline focus:bg-gray-300 "
              href={article.url}>Read full article</a>
          </div>
        </main>
      : <>
          <h2>Article you trying to reach don't exist here, please go to</h2>
          <a href="/">home page</a>
        </>}
      </div>
      <Footer />
    </div>
  );
}

export default Article;
