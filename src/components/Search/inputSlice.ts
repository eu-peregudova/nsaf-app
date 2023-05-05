import {createSlice} from "@reduxjs/toolkit";

interface InputState {
  value: string
}

const initialState: InputState = {
  value: ''
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setInput } = inputSlice.actions

export default inputSlice.reducer
