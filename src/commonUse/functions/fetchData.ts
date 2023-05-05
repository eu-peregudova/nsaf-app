import {SetLoader} from "../types/SetTypes";
import {iArticle} from "../types/iArticle";

export default async function fetchData(value: string, source = 'no', loader: SetLoader): Promise<iArticle[] | []> {
  function defineLink() {
    let finalLink: string;
    const baseLink = `https://newsapi.org/v2/`
    const lang = `en`
    const pageSize = 100

    if (value !== '') {
      finalLink = `${baseLink}everything?q=${value}&language=${lang}&pageSize=${pageSize}&sortBy=publishedAt&searchIn=title`
    } else {
      finalLink = `${baseLink}top-headlines?language=${lang}&pageSize=${pageSize}`
    }

    if (source !== 'no') {
      finalLink += `&sources=${source}`
    }

    // in case API don't answer because there was too many requests, second key:
    // 7705af18e3f24e069b4d57ab8b5a577a
    return finalLink + `&apiKey=4c32a79d7abc4e96bd76e397eb2297da`
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

