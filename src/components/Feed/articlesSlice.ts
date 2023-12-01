import {createSlice} from "@reduxjs/toolkit";
import {iArticle} from "commonUse/types/iArticle";

interface ArticlesState {
  totalItems: number,
  page: number,
  value: iArticle[] | []
}

const initialState: ArticlesState = {
  totalItems: 0,
  page: 1,
  value: []
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.value = action.payload.value
      state.page = action.payload.page
      state.totalItems = action.payload.total
    }
  }
})

export const { setArticles } = articlesSlice.actions

export default articlesSlice.reducer
