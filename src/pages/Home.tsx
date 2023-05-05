import React from 'react';
import {Header} from "components/Header/Header";
import Search from "components/Search/Search";
import Sources from "components/Sources/Sources";
import Feed from "components/Feed/Feed";
import Footer from "components/Footer/Footer";

function Home() {
  return (
    <div className="md:max-w-2xl md:m-auto m-4 flex flex-col h-screen">
      <div className="flex-grow flex-shrink-0 basis-auto">
          <Header />
          <Search />
          <Sources />
          <Feed />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
