import fetchData from "commonUse/functions/fetchData"
import {useState} from "react";
import Loader from "components/Loader/Loader";
import {useAppDispatch, useAppSelector} from "hooks";
import {setInput} from "./inputSlice";
import {setArticles} from "components/Feed/articlesSlice";

function Search() {

  const source = useAppSelector((state) => state.source.value)
  const input = useAppSelector((state) => state.input.value)
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        fetchData(input, source, setLoading).then((data) => dispatch(setArticles(data)))
      }}>
        <label htmlFor="search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <input type="search" id="search"
                 className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                 placeholder="Search news"
                 value={input}
                 maxLength={500}
                 onChange={(e) => dispatch(setInput(e.target.value))}
                 />
            <input type="button"
                   value="Search"
                   className="text-white absolute right-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                   onClick={() =>
                       fetchData(input, source, setLoading).then((data) => dispatch(setArticles(data)))
                   }
            />
        </div>
      </form>
      {loading && <Loader />}
    </>
  );
}

export default Search;
