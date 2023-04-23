import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from '../components/Search/sourceSlice'
import inputReducer from '../components/Search/inputSlice'
import articlesReducer from '../components/Feed/articlesSlice'

export const store = configureStore({
  reducer: {
    source: sourceReducer,
    input: inputReducer,
    articles: articlesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
