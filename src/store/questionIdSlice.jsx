import { createSlice } from '@reduxjs/toolkit';
import data from './../assets/data.json';

const initialState = {
  currentQuestionId: 0,
  maxId: data.length - 1,
  minId: 0
}

const questionIdSlice = createSlice({
  name: 'questionId',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentQuestionId < state.maxId) {
        state.currentQuestionId ++
      }
    },
    previousQuestion: state => {
      if (state.currentQuestionId > state.minId) {
        state.currentQuestionId --
      }
    }
  }
})

export default questionIdSlice.reducer
export const { nextQuestion, previousQuestion } = questionIdSlice.actions