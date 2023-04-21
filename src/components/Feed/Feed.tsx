import React, {useEffect, useState} from 'react';
import ArticleCard from "./ArticleCard";
import {iArticle} from "./iArticle";
import fetchData from "../Search/fetchData";
import {SetArticle} from "../Search/SetTypes";

function Feed({ articles, input, source, setArticles } :
                {articles: iArticle[], input: string, source: string, setArticles: SetArticle} ) {

  const [loading, setLoading] = useState(false);
  const [loadMoreNumber, setLoadMoreNumber] = useState(1);
  const articlesToShow = []

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
      <div>
        {articles[0] ?
          articlesToShow.map((article, id) => {
            return <ArticleCard key={id} article={article} />
          })
          : <h1>No articles matching this request</h1>
        }
      </div>
      {articles[0] && loadMoreNumber < Math.ceil(articles.length / 20) && <button
        onClick={() => {
          setLoadMoreNumber(loadMoreNumber + 1)
          fetchData(input, source, setArticles, setLoading)
          console.log(articles)
        }}
      >{loading ? `loading...` : `Load more`}</button>}
    </>
  );
}

export default Feed;
