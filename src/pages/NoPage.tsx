import React from 'react';
import {Header} from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function NoPage() {
  return (
    <div className="md:max-w-2xl md:m-auto mx-4 h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex-shrink-0 basis-auto flex justify-center items-center">
        <div className="m-auto flex flex-col justify-center items-center">
          <h2 className="text-violet-700 font-black text-center uppercase text-5xl">404</h2>
          <p className="text-violet-700 font-black text-center uppercase m-3 text-2xl">This page doesn't exist, but you can<br /> return to</p>
          <a className="block bg-violet-500 text-white px-4 py-2 m-3 rounded-lg uppercase font-bold hover:bg-violet-700" href="/">home page</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NoPage;
