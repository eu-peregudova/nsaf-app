import React from 'react';
import {iArticle} from "../../commonUse/types/iArticle";
import {Link} from "react-router-dom";
import {encodeArticle} from "../Article/URLencoder";
import dateRead from "../../commonUse/functions/dateRead";

function ArticleCard({ article } : { article: iArticle }) {

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg max-w-full"
           src={article.urlToImage || `https://placehold.co/600x400?text=${article.source.name}`}
           onError={({ currentTarget }) => {
             currentTarget.src=`https://placehold.co/600x400?text=${article.source.name}`;
           }}>
      </img>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {article.title}
        </h2>
        <p className="mb-3 font-normal text-gray-700">
          {article.source.name}
        </p>
        <p className="mb-0 font-normal text-gray-700">
          {dateRead(article.publishedAt).date}
        </p>
        <p className="font-normal text-gray-500 mt-0 mb-3 italic">
          {dateRead(article.publishedAt).time}
        </p>
        <Link
          className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none"
          to={`/article/${encodeArticle(article)}`}
        >Read more
        </Link>
      </div>
    </div>
  // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //   <a href="#">
  //     <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
  //   </a>
  //   <div className="p-5">
  //     <a href="#">
  //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
  //         acquisitions 2021</h5>
  //     </a>
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
  //       acquisitions of 2021 so far, in reverse chronological order.</p>
  //     <a href="#"
  //        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  //       Read more
  //       <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
  //            xmlns="http://www.w3.org/2000/svg">
  //         <path fill-rule="evenodd"
  //               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
  //               clip-rule="evenodd"></path>
  //       </svg>
  //     </a>
  //   </div>
  // </div>
  );
}

export default ArticleCard;
