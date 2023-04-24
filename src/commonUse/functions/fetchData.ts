import {SetLoader} from "../types/SetTypes";
import {iArticle} from "../types/iArticle";

export default async function fetchData(value: string, source = 'no', loader: SetLoader): Promise<iArticle[] | []> {
  function defineLink() {
    let link = '';
    if (value !== '') {
      link = `https://newsapi.org/v2/everything?q=${value}&language=en&sortBy=publishedAt&pageSize=100&searchIn=title`
    } else {
      link = `https://newsapi.org/v2/top-headlines?language=en&pageSize=100`
    }

    if (source !== 'no') {
      link += `&sources=${source}`
    }

    // return link + `&apiKey=7705af18e3f24e069b4d57ab8b5a577a`
    return link + `&apiKey=4c32a79d7abc4e96bd76e397eb2297da`
  }

  async function getData() {
    loader(true)
    try {
      const response = await fetch(defineLink())
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      return data.articles
    } catch (error) {
      console.log(error)
      return new Promise(() => [])
    } finally {
      loader(false)
    }
  }

  return getData()
}

