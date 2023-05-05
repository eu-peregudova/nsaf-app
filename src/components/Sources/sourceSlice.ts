import {createSlice} from "@reduxjs/toolkit";

interface SourceState {
  value: string
}

const initialState: SourceState = {
  value: 'no'
}

export const sourceSlice = createSlice({
  name: 'source',
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSource } = sourceSlice.actions

export default sourceSlice.reducer
