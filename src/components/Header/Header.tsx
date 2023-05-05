import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Header() {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-row justify-between my-4">
      <Link className="text-violet-800 font-black uppercase text-2xl"
            to="/" title="Home page">news-app</Link>
      {pathname === '/' || pathname === '/home' ? <></> :
        <Link className="font-normal hover:underline hover:cursor-pointer"
          to="/" title="Home page">Back to home page</Link>}
    </nav>
  )
}
