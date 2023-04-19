import React, {useState} from 'react';
import {Header} from "../components/Header/Header";
import {iArticle} from "../components/Feed/iArticle";
import Search from "../components/Search/Search";
import Sources from "../components/Search/Sources";
import Feed from "../components/Feed/Feed";

function Home() {

  const [articles, setArticles] = useState<iArticle[]>([])
  const [source, setSource] = useState('no')
  const [input, setInput] = useState('')
  const [page, setPage] = useState(2)

  return (
    <>
      <Header />
      <Search setArticles={setArticles} source={source} input={input} setInput={setInput} setPage={setPage}/>
      <Sources setSource={setSource} setArticles={setArticles} source={source} input={input}/>
      <Feed articles={articles} input={input} source={source} setArticles={setArticles} page={page} setPage={setPage} />
    </>
  )
}

export default Home;
