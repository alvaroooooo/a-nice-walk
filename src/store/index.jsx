import { configureStore } from '@reduxjs/toolkit';
import alternativeReducer from './alternativeSlice';
import questionIdReducer from './questionIdSlice'

const store = configureStore({
  reducer: {
    alternative: alternativeReducer,
    id: questionIdReducer,
  }
})

export default store