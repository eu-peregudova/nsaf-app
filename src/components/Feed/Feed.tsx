import React, {useEffect, useState} from 'react';
import ArticleCard from "./ArticleCard";
import {iArticle} from "./iArticle";
import fetchData from "../Search/fetchData";
import {SetArticle, SetPage} from "../Search/SetTypes";

function Feed({ articles, input, source, setArticles, page, setPage } :
                {articles: iArticle[], input: string, source: string, setArticles: SetArticle, page: number, setPage: SetPage}) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      fetchData('', 'no', 1, setArticles, setLoading)
      console.log('latest in Feed setted')
    };
  }, []);

  return (
    <>
      <div>
        {articles &&
          articles.map((article, id) => {
            return <ArticleCard key={id} article={article} />
          })
        }
      </div>
      <button
        onClick={() => {
          setPage(page + 1)
          fetchData(input, source, page, setArticles, setLoading)
          console.log(articles)
        }}
      >{loading ? `loading...` : `Load more`}</button>
    </>
  );
}

export default Feed;
