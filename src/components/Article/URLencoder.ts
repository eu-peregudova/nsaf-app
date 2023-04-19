import {iArticle} from "../Feed/iArticle";

function encodeArticle(article: iArticle) {
  return encodeURIComponent(JSON.stringify(article))
}

function decodeArticle(id: string | undefined): iArticle | undefined {
  try {
    return JSON.parse(<string>id)
  }
  catch(e) {
    return undefined
  }
}

export {encodeArticle, decodeArticle}
