import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Article from "pages/Article";
import NoPage from "pages/NoPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/news-app" element={<Home />} />
          <Route path="/news-app/home" element={<Home />} />
          <Route path="/news-app/article/:id" element={<Article />} />
          <Route path="/news-app/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
