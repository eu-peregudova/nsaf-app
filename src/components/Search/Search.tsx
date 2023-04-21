import fetchData from "../../commonUse/functions/fetchData"
import {useState} from "react";
import {SetArticle, SetInput, SetPage} from "../../commonUse/types/SetTypes";

function Search({ setArticles, source, input, setInput, setPage } :
                  { setArticles: SetArticle, source: string, input: string, setInput: SetInput, setPage: SetPage}) {

  const [loading, setLoading] = useState(false);

  return (
    <>
      {/*<div>*/}
      {/*  /!*<input*!/*/}
      {/*  /!*  placeholder="type to search"*!/*/}
      {/*  /!*  value={input}*!/*/}
      {/*  /!*  maxLength={500}*!/*/}
      {/*  /!*  onChange={(e) => setInput(e.target.value)}*!/*/}
      {/*  /!*  className="rounded-md border-2 border-gray-800 pl-1"*!/*/}

      {/*  /!*<input*!/*/}
      {/*  /!*  type="button"*!/*/}
      {/*  /!*  value="SEARCH"*!/*/}
      {/*  /!*  onClick={() => {*!/*/}
      {/*  /!*    fetchData(input, source, setArticles, setLoading)*!/*/}
      {/*  /!*    setPage(2)*!/*/}
      {/*  /!*  }}*!/*/}
      {/*  /!*  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"*!/*/}


      {/*</div>*/}
      <form>
        <label htmlFor="search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <input type="search" id="search"
                 className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                 placeholder="Search news"
                 value={input}
                 maxLength={500}
                 onChange={(e) => setInput(e.target.value)}
                 />
            <input type="button"
                   value="Search"
                   className="text-white absolute right-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                   onClick={() => {
                     fetchData(input, source, setArticles, setLoading)
                     setPage(2)
                   }}
            />
        </div>
      </form>
      {loading && <p>Loading...</p>}
    </>
  );
}

export default Search;
