import React, {useState} from 'react';
import {Header} from "../components/Header/Header";
import {iArticle} from "../commonUse/types/iArticle";
import Search from "../components/Search/Search";
import Sources from "../components/Search/Sources";
import Feed from "../components/Feed/Feed";
import Footer from "../components/Footer/Footer";

function Home() {

  const [articles, setArticles] = useState<iArticle[]>([])
  const [source, setSource] = useState('no')
  const [input, setInput] = useState('')
  const [page, setPage] = useState(2)

  return (
    <div className="md:max-w-2xl md:m-auto m-4 flex flex-col h-screen">
      <div className="flex-grow flex-shrink-0 basis-auto">
        <Header />
        <Search setArticles={setArticles} source={source} input={input} setInput={setInput} setPage={setPage}/>
        <Sources setSource={setSource} setArticles={setArticles} input={input}/>
        <Feed articles={articles} input={input} source={source} setArticles={setArticles} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
