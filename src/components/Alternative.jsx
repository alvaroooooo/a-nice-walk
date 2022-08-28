import { useSelector, useDispatch } from 'react-redux';
import { setIsAnswer } from './../store/alternativeSlice'
import { nanoid } from '@reduxjs/toolkit';

function Alternative ({props}) {

  const dispatch = useDispatch()
  const { isAnswered, isCorrect } = useSelector(state => state.alternative)

  const {
    alternatives,
    answer,
    answerKey,
    title
  } = props;

  const handleAlternativeAnswer = (e) => {
    const { value: indexClicked } = e.target.dataset
    if (parseInt(indexClicked, 10) === answerKey){
      dispatch(setIsAnswer({
        isAnswered: true,
        isCorrect: true
      }))
    } else {
      dispatch(setIsAnswer({
        isAnswered: true,
        isCorrect: false
      }))
    }
  }

  return (
    <>
      <article className="container-title">
        { title }
      </article>

      <article className="container-premise">
        <section className="alternative-container">
          {
            alternatives.map((alternative, index) => {
              let divClassName = index === answerKey ? "correct" : "incorrect"
              divClassName = isAnswered ? "alternative " + divClassName : "alternative"
              return (<div className={divClassName}
                data-value={index}
                key={nanoid()}
                onClick={handleAlternativeAnswer}>
                {alternative}
              </div>)
            })
          }
          <div className="answer-container">
            <div className="answer-section">
              {
                isAnswered && isCorrect && 
                  <div className="is-correct">
                    😊 Correct! ✅
                  </div>
              }
              {
                isAnswered && !isCorrect && 
                  <div className="is-incorrect"> 
                    😢 Almost darling ❌ 
                  </div>
              }
              {
                isAnswered &&
                  <div className="answer"> 
                    {answer}
                  </div>
              }
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Alternative