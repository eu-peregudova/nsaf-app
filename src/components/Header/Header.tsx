import React from "react";
import {Link} from "react-router-dom";

export function Header() {
  return (
    <nav className="flex flex-row justify-between my-4 items-center">
      <Link className="text-violet-800 font-black uppercase text-2xl"
            to="/" title="Home page">nsaf search</Link>
      <a className='underline'
         href='https://artcrimes.fbi.gov/'>US National Stolen Art File (by FBI)</a>
    </nav>
  )
}
