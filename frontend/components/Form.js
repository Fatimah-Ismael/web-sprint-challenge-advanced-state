import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
const inputChange = props.inputChange;
const form = props.form;
const postQuiz = props.postQuiz;

  const onChange = evt => {
    evt.preventDefault();
    //console.log('value', evt.target.value)
    //console.log('id', evt.target.id);
    inputChange({[evt.target.id]: evt.target.value})
  }

  const onSubmit = evt => {
    evt.preventDefault();
    //console.log('submit')
    postQuiz(form);
  }
  /*const disabled= 
    form.newQuestion.trim() &&
    form.newTrueAnswer.trim() &&
    form.newFalseAnswer.trim()
*/

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" >Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state =>{
  //console.log(mapStateToProps)
  return{form:state.form}
  
}
export default connect(mapStateToProps, actionCreators)(Form)
