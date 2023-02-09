import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { dispatch } from 'react';

export function Form(props) {
  const disabled = true;
  const { inputChange, form, postQuiz } = props;

//const newQuestion = '';
//const newTrueAnswer= '';
//const newFalseAnswer= '';


  const onChange = evt => {
   // evt.preventDefault();
    //console.log('value', evt.target.value)
    console.log('id', evt.target.id);
    
    inputChange({id:evt.target.id, value: evt.target.value});
  }
//console.log(props.newQuestion)
//console.log(newTrueAnswer)
  const onSubmit = (evt) => {
    evt.preventDefault();
    //console.log('submit')
   
    postQuiz(form);
    //actionCreators.resetForm();
  }
  /*const disabled = 
    props.newQuestion.trim().length>0 &&
    props.newTrueAnswer &&
    props.newFalseAnswer;
    */


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" 
      disabled={form.newQuestion.trim().length>0 && form.newTrueAnswer.trim().length>0 && form.newFalseAnswer.trim().length>0 ? !disabled: disabled}>
        Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state =>{
  //console.log(mapStateToProps)
  return{
  
  form: state.form,
}
  
}
export default connect(mapStateToProps, actionCreators)(Form)
