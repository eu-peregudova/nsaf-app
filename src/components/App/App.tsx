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
          <Route path="/nsaf-app" element={<Home />} />
          <Route path="/nsaf-app/home" element={<Home />} />
          <Route path="/nsaf-app/article/:id" element={<Article />} />
          <Route path="/nsaf-app/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
