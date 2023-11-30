import {setPage} from "../../store/pageSlice";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {iArticle} from "../../commonUse/types/iArticle";

type articlesType = {
  value: iArticle[] | [],
  totalItems: number,
  page: number
}

export default function PageButtons({articles, loading}: { articles: articlesType, loading: boolean }) {
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.page.value)

  return (
    <>
    {articles.value && articles.value.length > 0
        && !loading
        &&
        <div className="flex flex-col justify-center items-center my-4">
          <p className="text-center">Page {page} out of {Math.ceil(articles.totalItems / 20)}</p>
          <div className='w-full flex justify-between'>
            {page > 1 ?
              <button
                className="m-1 ml-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => {
                  dispatch(setPage(page - 1))
                }}>
                {`⏪ Previous`}
              </button>
              : <div></div>
            }
            {articles.totalItems - 20 * articles.page > 0
              ? <button
                className="m-1 mr-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => {
                  dispatch(setPage(page + 1))
                }}>
                {`Next ⏩`}
              </button>
              : <div></div>
            }
          </div>
        </div>
    }
    </>
  )
}
