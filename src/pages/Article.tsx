import React from 'react';
import {Header} from "../components/Header/Header";
import {Link, useParams} from "react-router-dom";
import {decodeArticle} from "../commonUse/functions/URLencoder";
import dateRead from "../commonUse/functions/dateRead";
import Footer from "../components/Footer/Footer";


function Article() {
  const { id } = useParams()
  const article = decodeArticle(id)

  return (<>
    <div className="max-w-2xl m-auto h-screen flex flex-col">
      <div className="flex-grow flex-shrink-0 basis-auto mx-4">
      <Header/>
      {article ?
        <main className="max-w-2xl m-auto flex flex-col">
          <Link className="font-normal hover:underline block self-end hover:cursor-pointer m-2"
                  to="/news-app" title="Home page">Back to search page ↩️</Link>
          <div className="">
            <h2 className="text-2xl font-extrabold">{article.title}</h2>
            <img className="h-auto rounded-lg w-full m-2"
                 src={article.images[0].original || `https://placehold.co/600x400?text=${article.title}`}
                 alt={article.title}
                 onError={({ currentTarget }) => {
                   if (article.title) {
                       currentTarget.src = `https://placehold.co/600x200?text=${article.title}`
                   } else {
                    currentTarget.src = `https://placehold.co/600x200?text="Stolen art file"`
                   }
                 }}/>
            <div className="my-5 flex justify-between">
              <div>
                <p className="text-gray-500 italic">
                  Author: {article.maker || 'unknown'}
                </p>
                <p className="text-gray-500 italic">
                  Category of crime: {article.crimeCategory || 'unknown'}
                </p>
                <p className="text-gray-500 italic">
                  Measurements: {article.measurements || 'unknown'}
                </p>
              </div>
              <div>
                <p className="text-right text-gray-500 italic">{dateRead(article.modified).date}</p>
                <p className="text-right text-gray-500 italic">{dateRead(article.modified).time}</p>
              </div>
            </div>
            <p className="block mb-6 text-lg font-normal text-gray-700">{article.description}</p>
            <p className="block mb-6 text-lg font-normal text-gray-700">{article.additionalData}</p>
            <a className="my-3 text-base font-medium text-violet-500 hover:text-violet-900 hover:underline focus:bg-gray-300 "
              href={article.url.replace('www.fbi.gov', 'artcrimes.fbi.gov')}>Read full article</a>
          </div>
        </main>
      : <>
          <h2>Article you trying to reach don't exist here, please go to</h2>
          <a href="/">home page</a>
        </>}
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Article;
