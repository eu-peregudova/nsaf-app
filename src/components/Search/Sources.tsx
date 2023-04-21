import React, {useEffect, useState} from 'react';
import {SetArticle, SetSource} from "../../commonUse/types/SetTypes";
import fetchData from "../../commonUse/functions/fetchData";

function Sources( { setSource, setArticles, input } :
                    { setSource: SetSource, setArticles: SetArticle, input: string}) {
  const [sourceList, setSourceList] = useState([{
    name: 'No sources',
    id: ''
  }])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSources = () => {
      // fetch(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=7705af18e3f24e069b4d57ab8b5a577a`)
      fetch(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=4c32a79d7abc4e96bd76e397eb2297da`)
        .then((res) => res.json()).then(json => {
          setSourceList(json.sources)
          console.log('sources request success')
      })
        .catch((e) => {
          console.log(e)
          setSourceList(sourceList)
        })
    }

    getSources()

    console.log('use effect')
  }, [])

  return (
    <div className="mt-4">
      <p className="text-black font-black"
      >Filter news by source:</p>
      <select
        className="mt-2 font-bold text-violet-500 w-full border-2 border-gray-200 hover:border-gray-300 focus:outline-none font-medium rounded-lg text-sm px-4 py-1 text-left inline-flex items-center"
        defaultValue={'no'}
        onChange={(event) => {
          setSource(event.target.value)
          fetchData(input, event.target.value, setArticles, setLoading)
        }
      }
      >
        <option
          className="text-left font-bold"
          value={'no'} key={'no'}>Any source</option>
        {
          sourceList?.map(
            (o) => <option className="text-left font-bold" value={o.id} key={o.id}>{o.name}</option>
          )
        }
      </select>
      {loading && <p>LOADING...</p>}
    </div>
  );
}

export default Sources;
