import React, {useEffect, useState} from 'react';
import ArticleCard from "./ArticleCard";
import {iArticle} from "../../commonUse/types/iArticle";
import fetchData from "../../commonUse/functions/fetchData";
import {SetArticle} from "../../commonUse/types/SetTypes";
import Loader from "../Loader/Loader";

function Feed({ articles, input, source, setArticles } :
                {articles: iArticle[], input: string, source: string, setArticles: SetArticle} ) {

  const [loading, setLoading] = useState(false);
  const [loadMoreNumber, setLoadMoreNumber] = useState(1);
  const articlesToShow: iArticle[] = []

  useEffect(() => {
    return () => {
      fetchData('', 'no', setArticles, setLoading)
      console.log('latest in Feed setted')
    };
  }, []);

  function getNumberOfArticles() {
    for (let i = 0; i < loadMoreNumber * 20; i += 1) {
      if (articles[i]) {
        articlesToShow.push(articles[i])
      }
    }
  }

  getNumberOfArticles()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-top justify-center max-w-2xl mt-4">
        {articles[0]
          ?
          articlesToShow.map((article, id) => {
            return <ArticleCard key={id} article={article} />
          })
          :
          <h1 className="text-center font-black text-violet-800 text-lg"
          >No articles matching this request</h1>
        }
      </div>
      {loading && <Loader />}
      <div className="flex justify-center items-center m-4">
        {articles[0] && loadMoreNumber < Math.ceil(articles.length / 20) && <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          onClick={() => {
            setLoadMoreNumber(loadMoreNumber + 1)
            fetchData(input, source, setArticles, setLoading)
            console.log(articles)
          }}
        >{loading ? `loading...` : `Load more`}</button>}
      </div>
    </>
  );
}

export default Feed;
