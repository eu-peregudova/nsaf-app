import { configureStore } from '@reduxjs/toolkit'
import inputReducer from '../components/Search/inputSlice'
import articlesReducer from '../components/Feed/articlesSlice'
import pageReducer from '../store/pageSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    articles: articlesReducer,
    page: pageReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
