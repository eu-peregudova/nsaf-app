import {createSlice} from "@reduxjs/toolkit";
import {iArticle} from "../../commonUse/types/iArticle";

interface ArticlesState {
  value: iArticle[] | []
}

const initialState: ArticlesState = {
  value: []
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setArticles } = articlesSlice.actions

export default articlesSlice.reducer
