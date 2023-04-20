import {SetArticle, SetLoader} from "./SetTypes";

export default function fetchData(value: string, source = 'no', setter: SetArticle, loader: SetLoader) {
  loader(true)
  fetch(defineLink())
    .then((res) => res.json()).then(json => {
    setter(json.articles)
    loader(false)
    console.log(`articles fetched, search: ${value}, source: ${source}, page: no, link: ${defineLink()}`)
  })
    .catch((e) => {
      console.log(e, 'articles fetch fail')
      loader(false)
    })

  function defineLink() {
    let link = '';
    if (value !== '') {
      link = `https://newsapi.org/v2/everything?q=${value}&sortBy=publishedAt&pageSize=100&searchIn=title`
    } else {
      link = `https://newsapi.org/v2/top-headlines?language=en&pageSize=100`
    }

    if (source !== 'no') {
      link += `&sources=${source}`
    }

    return link + `&apiKey=7705af18e3f24e069b4d57ab8b5a577a`
  }
}

