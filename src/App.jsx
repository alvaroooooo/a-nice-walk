import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, previousQuestion } from './store/questionIdSlice';
import { setDefault } from './store/alternativeSlice';
import choiceComponent from './helpers/choiceComponent';

import data from './assets/data.json'

function App() {
  const dispatch = useDispatch();
  const questionId = useSelector(state => state.id.currentQuestionId)
  const activity = data.filter( item => item.id === questionId)[0];
  const { type, ...props } = activity;
  const selectedComponent = choiceComponent(type, props);
  
  const handleNext = () => {
    dispatch( nextQuestion() )
    type === "Alternative" && dispatch( setDefault() )
  }

  const handlePrevious = () => {
    dispatch( previousQuestion() )
    type === "Alternative" && dispatch( setDefault() )
  }

  return (
    <main className="main-container">

      {selectedComponent}
      
      <article className="container-buttons">
        <div className="btn btn-previous"
          onClick={handlePrevious}>
          Previous 🤨
        </div>
        <div className="btn btn-next"
          onClick={handleNext}>
          Next 👀
        </div>
      </article>

    </main>
  )
}

export default App
