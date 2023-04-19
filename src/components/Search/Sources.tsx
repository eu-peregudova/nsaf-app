import React, {useEffect, useState} from 'react';
import {SetSource} from "./SetTypes";
import fetchData from "./fetchData";

function Sources( { setSource }: {setSource: SetSource} ) {
  const [sourceList, setSourceList] = useState([{
    name: 'No sources',
    id: ''
  }])

  useEffect(() => {
    const getSources = () => {
      fetch(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=7705af18e3f24e069b4d57ab8b5a577a`)
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
    <div>
      <select
        defaultValue={'no'}
        onChange={(event) => {
          setSource(event.target.value)
        }
      }
      >
        <option value={'no'} key={'no'}>Any source</option>
        {
          sourceList?.map(
            (o) => <option value={o.id} key={o.id}>{o.name}</option>
          )
        }
      </select>
    </div>
  );
}

export default Sources;
