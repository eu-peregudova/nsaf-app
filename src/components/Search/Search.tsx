import {useState} from "react";
import {useAppDispatch} from "../../hooks";
import {setInput} from "./inputSlice";
import {setPage} from "../../store/pageSlice";

function Search() {
  const [localInput, setLocalInput] = useState('')
  const dispatch = useAppDispatch()

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(setInput(localInput))
        dispatch(setPage(1))
      }}>
        <label htmlFor="search"
               className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <input type="search" id="search"
                 className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                 placeholder="Search news"
                 maxLength={500}
                 value={localInput}
                 onChange={(e) => setLocalInput(e.target.value)}
                 />
            <input type="submit"
                   value="Search"
                   className="text-white absolute right-2.5 bottom-2.5 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            />
        </div>
      </form>
    </>
  );
}

export default Search;
