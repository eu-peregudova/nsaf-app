import fetchData from "./fetchData"
import {useState} from "react";
import {SetArticle, SetInput, SetPage} from "./SetTypes";

function Search({ setArticles, source, input, setInput, setPage } :
                  { setArticles: SetArticle, source: string, input: string, setInput: SetInput, setPage: SetPage}) {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        <input
          placeholder="type to search"
          value={input}
          maxLength="500"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="button"
          value="SEARCH"
          onClick={() => {
            fetchData(input, source, setArticles, setLoading)
            setPage(2)
          }
        }
        />
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}

export default Search;
