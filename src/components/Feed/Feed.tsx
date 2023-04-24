import React, {useEffect, useState} from 'react';
import ArticleCard from "./ArticleCard";
import {iArticle} from "../../commonUse/types/iArticle";
import fetchData from "../../commonUse/functions/fetchData";
import Loader from "../Loader/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setArticles} from "./articlesSlice";

function Feed() {
  //redux
  const articles = useAppSelector((state) => state.articles.value)
  const source = useAppSelector((state) => state.source.value)
  const input = useAppSelector((state) => state.input.value)
  const dispatch = useAppDispatch()

  //useStates
  const [loading, setLoading] = useState(false);
  const [loadMoreNumber, setLoadMoreNumber] = useState(1);

  const articlesToShow: iArticle[] = []

  useEffect(() => {
    return () => {
      fetchData(input, source, setLoading).then((data) => {
        dispatch(setArticles(data))
      }
      )
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
          }}
        >{loading ? `loading...` : `Load more`}</button>}
      </div>
    </>
  );
}

export default Feed;
