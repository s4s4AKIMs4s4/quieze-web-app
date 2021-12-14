import React, {useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { useEffect } from 'react';
import useStyles from '../cssModules/backTextFields';
import {HOCFormBack} from './HOC/HOCBack'
import {textQestion} from '../../redux/types'
import {correctAnswersMap} from './Mediator'
import {giveCorrectList} from '../pureFunctionsForComponents'



interface propsBack{
  text:string[],
  obj: textQestion,
  correct: correctAnswersMap,
}

export default  function BackTextFields(props: propsBack) {
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



  let textHandler = (idx: number) =>( (event: React.ChangeEvent<HTMLInputElement> ) => {
      const mas  = currentQuestion?.answers
      mas[idx] = event.target.value
      console.log('value')
      console.log(mas[idx])
      SetCurrentQuestion(prev =>( {...prev, answers: mas } ) )
    }
  )


  const checkHandler = (idx: number) => ((event) => {
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
    const correct = giveCorrectList(check,length)
    SetCurrentQuestion(prev =>( {...prev, true: correct } ) )
    
  })


  const hadleLastField = (idx: number) => (event) =>{
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

