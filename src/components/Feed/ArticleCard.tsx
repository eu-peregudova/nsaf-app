import React from 'react';
import {iArticle} from "commonUse/types/iArticle";
import {Link} from "react-router-dom";
import {encodeArticle} from "commonUse/functions/URLencoder";
import dateRead from "commonUse/functions/dateRead";

function ArticleCard({ article } : { article: iArticle }) {
  return (
    <div className="h-max-fit max-w-full bg-white border border-gray-200 rounded-lg shadow grid grid-col-3 hover:bg-gray-100">
      <img className="rounded-t-lg h-auto"
           src={article.images[0].original || `https://placehold.co/600x400?text=${article.title}`}
           alt={article.title}
           onError={({ currentTarget }) => {
             if (article.title) {
              currentTarget.src=`https://placehold.co/600x400?text=${article.title}`
             } else {
               currentTarget.src=`https://placehold.co/600x400?text="Stolen art file"`
             }
           }}>
      </img>
      <div className="max-h-min max-w-full p-4 flex flex-col justify-between">
        <div>
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {article.title}
          </h2>
          <p className="mb-3 font-normal text-gray-700">
            from {article.period}
          </p>
          <p className="mb-3 font-normal text-gray-700">
            {article.description}
          </p>
        </div>
        <div className="min-h-2">
          <p className="block mb-0 font-normal text-gray-500 italic">
            {dateRead(article.modified).date}
          </p>
          <p className="block font-normal text-gray-500 mt-0 mb-3 italic">
            {dateRead(article.modified).time}
          </p>
        </div>
        <Link
          className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none"
          to={`/news-app/article/${encodeArticle(article)}`}
        >Read more
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
