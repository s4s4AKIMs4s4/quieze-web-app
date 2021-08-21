import React, {useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { useEffect } from 'react';
import useStyles from '../cssModules/backTextFields';
import debounce from 'lodash.debounce'
import HOCForm from './HOCForm';
import {HOCFormBack} from './HOC/HOCBack'

const giveCorrect = (check, length)=>{
  let correct: number[] = [] 
  for(let it  = 0 ; it<length; it++){
    if(check[it])
    correct.push(it)  
  }
  return correct
}

export default  function BackTextFields(props) {
  const classes = useStyles();
  const [it, setIt] = React.useState(props.text.length)
  const [correctAnswers,setСorrectAnswers] = React.useState(props.correct)
  
  const [currentQuestion, SetCurrentQuestion] = React.useState(
    props.obj
  ) 

  useEffect(() => {
    setIt(props.text.length)
    setСorrectAnswers(props.correct)
    SetCurrentQuestion(props.obj)
    
  }, [props.obj])



  let textHandler = (idx) =>( (event) => {
      const mas  = currentQuestion?.answers
      mas[idx] = event.target.value
      console.log('value')
      console.log(mas[idx])
      SetCurrentQuestion(prev =>( {...prev, answers: mas } ) )
    }
  )


  const checkHandler = (idx) => ((event) => {
    let check = {...correctAnswers}

    if(correctAnswers[idx] ){
      check[idx] = false      
      setСorrectAnswers( (prev) =>({...prev,[idx]: false}))
    }
    else {
      check[idx] = true 
      setСorrectAnswers( (prev) =>({...prev,[idx]: true}))
    }
    const length = Object.values(check).length
    const correct = giveCorrect(check,length)
    SetCurrentQuestion(prev =>( {...prev, true: correct } ) )
    
  })


  const hadleLastField = (idx) => (event) =>{
    setСorrectAnswers({...correctAnswers,[idx+1]: false})
    setIt(it+1)
  }

 const handlerQuestionField  = (event) => {
  SetCurrentQuestion(prev =>( {...prev, question:event.target.value } ) )
 }
 const debouncedQuestionField = useCallback(
  handlerQuestionField
, [])


 let rendoringTextFields = (
   <>
     <form className={classes.root} noValidate autoComplete="off"> 
      <TextField id="outlined-basic2" label="Enter a answer" value ={currentQuestion.question} onChange ={debouncedQuestionField} /> 
     </form>
     
      <Divider variant="middle" className = {classes.cen} />
      
      <HOCFormBack 
      text = {currentQuestion?.answers}
      it={it}
      correctAnswers = {correctAnswers}
      checkHandler = {checkHandler}
      textHandler = {textHandler}
      hadleLastField = {hadleLastField}
      currentTextState = {  {...currentQuestion}}
      
      />

   </>
 )

 return  rendoringTextFields


  }

//  export default React.memo(BackTextFields)