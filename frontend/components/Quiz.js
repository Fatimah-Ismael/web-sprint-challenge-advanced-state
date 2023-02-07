import React, {useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchQuiz, postAnswer, selectAnswer, setQuiz,  } from '../state/action-creators';


export function Quiz(props) {
  const {quiz, selectedAnswer, answerId, selectAnswer } = props;
  const dispatch = useDispatch();
  const disabled = true;
  const onClickHandler = (number)=> {
   dispatch(selectAnswer(quiz.answers[number].answer_id));
  };

if(quiz===null){
  useEffect(()=> {
    dispatch(fetchQuiz());
  }, []);
}
const onSubmitHandler = ()=> {
  const payload = {
    quiz_id: props.quiz.quiz_id, answer_id: selectedAnswer
  };
  console.log(payload)
  dispatch(postAnswer(payload))
}
 
console.log(quiz);

  return ( 
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${answerId === quiz.answers[0].answer_id ? 'selected' : ''}`}
              onClick={()=> onClickHandler(0)}
              >
                {quiz.answers[0].text} 
                <button >
                  {answerId === quiz.answers[0].answer_id ? ' SELECTED': "select"}
                
                </button>
              </div>

              <div className={`answer${selectedAnswer === quiz.answers[1].answer_id ? ' selected': ''}`}
              onClick={()=> onClickHandler(1)}
              >

                {quiz.answers[1].text}

              <div>
              <button >
                  {selectedAnswer === quiz.answers[1].answer_id ? ' SELECTED' : 'Select'}
                </button>
              </div>
               
              </div>
            </div>
            
            <button disabled={selectedAnswer? !disabled: disabled}id="submitAnswerBtn" onClick={onSubmitHandler}>Submit answer</button>
          </>
        ) : ('Loading next quiz...')
      }
    </div>
    
  )
}
const mapStateToProps = state=>{
  return {
    ...state, 
    quiz:state.quiz, answerId: state.selectedAnswer}
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, setQuiz})(Quiz)