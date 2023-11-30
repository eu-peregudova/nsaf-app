import React, {useEffect, useState} from 'react';
import ArticleCard from "./ArticleCard";
import useFetchData from "../../commonUse/functions/useFetchData";
import Loader from "../Loader/Loader";
import {useAppSelector} from "../../hooks";
import PageButtons from "./PageButtons";

function Feed() {
  const input = useAppSelector((state) => state.input.value)
  const page = useAppSelector((state) => state.page.value)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  useFetchData(input, setLoading)

  const articles = useAppSelector((state) => state.articles)

  return (
    <>
      <PageButtons articles={articles} loading={loading} />
      {!loading
      ? <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-top justify-center max-w-2xl mt-4">
        {articles.value && articles.value.length > 0
          ?
          articles.value.map((article, id) => {
            return <ArticleCard key={id} article={article} />
          })
          :
          <h1 className="text-center font-black text-violet-800 text-lg"
          >No items matching this request</h1>
        }
      </div>
      : <Loader />}
      <PageButtons articles={articles} loading={loading} />
    </>
  );
}

export default Feed;
