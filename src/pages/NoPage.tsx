import React from 'react';
import {Header} from "../components/Header/Header";

function NoPage() {
  return (
    <>
      <Header />
      <h2>Page do not exist, please return to</h2>
      <a href="/">home page</a>
    </>
  );
}

export default NoPage;
