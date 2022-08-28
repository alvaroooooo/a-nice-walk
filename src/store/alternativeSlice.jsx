import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAnswered: false,
  isCorrect: false
}

const alternativeStatusSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setDefault: (state) => {
      state.isAnswered = false,
      state.isCorrect = false
    },
    setIsAnswer: (state, action) => {
      state.isAnswered = action.payload.isAnswered,
      state.isCorrect = action.payload.isCorrect
    }
  }
})

export default alternativeStatusSlice.reducer
export const {setDefault, setIsAnswer} = alternativeStatusSlice.actions