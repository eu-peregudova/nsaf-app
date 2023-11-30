import {SetLoader} from "../types/SetTypes";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setArticles} from "../../components/Feed/articlesSlice";
import {useEffect} from "react";

export default function useFetchData(value: string, loader: SetLoader) {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.page.value)

  useEffect(() => {
    getData().then()
  }, [value, page]);

  function defineLink() {
    const base = 'https://api.fbi.gov/@artcrimes';
    const link = new URL(base);
    link.searchParams.set('pageSize', '20')

    if (value !== '') {
      link.searchParams.set('title', value)
    }

    if (page !== 1) {
      link.searchParams.set('page', page.toString())
    }

    return link
  }

  async function getData() {
    loader(true)
    try {
      const response = await fetch(defineLink())
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json();
      dispatch(setArticles({
        value: await data.items,
        page: await data.page,
        total: await data.total
      }))
    } catch (error) {
      console.log(error)
    } finally {
      loader(false)
    }
  }
}

