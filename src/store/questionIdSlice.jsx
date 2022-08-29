import { createSlice } from '@reduxjs/toolkit';
import data from './../assets/data.json';

const initialStateEmpty = {
  maxId: data.length - 1,
  minId: 0
}
let initialState;
if (localStorage.getItem("idStatus")) {
  const savedInfo = JSON.parse(localStorage.getItem('idStatus'))
  initialState = {currentQuestionId: parseInt(savedInfo, 10), ...initialStateEmpty}
} else {
  initialState = {currentQuestionId: 0, ...initialStateEmpty}
}

const questionIdSlice = createSlice({
  name: 'questionId',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentQuestionId < state.maxId) {
        state.currentQuestionId ++
        localStorage.setItem('idStatus', `${state.currentQuestionId}`)
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