import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { useEffect,useMemo } from 'react';
import useStyles from '../cssModules/nextTextFields';
import debounce from 'lodash.debounce';
import {HOCFormNext} from './HOC/HOCNext'


const giveCorrect = (check, length)=>{
  let correct: number[] = [] 
  for(let it  = 0 ; it<length; it++){
    if(check[it])
    correct.push(it)  
  }
  return correct
}


export default function NextTextFields(props) {
  const classes = useStyles();
  
  const [it, setIt] = React.useState(props.text)
  const [reUdate,setReUpdate] = React.useState(false)
  
  
  //initialization correctAnswersState
  const initcorrectAnswers: {
    [index: number] :boolean
  }  = {
    0:false,
    1:false,
  }

  const [correctAnswers,setCorrectAnswers] = React.useState({
    ...initcorrectAnswers
  })

  //initialization current question
  const initTrueAnswers:number[] = []  
  const initAnswers: string[]  = []
  const initQuestion: string = ""
  
  const initCurrentQuestion = {
    "question": initQuestion,
    "answers": initAnswers,
    "true": initTrueAnswers,
  }

  const [currentQuestion, SetCurrentQuestion] = React.useState(
     initCurrentQuestion
    ) 
  
  useEffect(() => {
    setIt(1)
  }, [])


  useEffect(()=>{
    setIt(1)
    SetCurrentQuestion(initCurrentQuestion)
    setCorrectAnswers({
      ...initcorrectAnswers
      })
  },[reUdate])


  const hadlerUpdate = () =>{ 
    setReUpdate(!reUdate) 
  }


  let textHandler = (idx) =>( (event) => {
    console.log(idx)
    console.log(event.target.value)
    const mas  = currentQuestion?.answers
    mas[idx] = event.target.value
    SetCurrentQuestion(prev =>( {...prev, answers: mas } ) )
  })



  
  
  
  const checkHandler = (idx) => ((event) => {
    let check = {...correctAnswers}

    if(correctAnswers[idx] ){
      check[idx] = false      
      setCorrectAnswers( (prev) =>({...prev,[idx]: false}))
    }
    else {
      check[idx] = true 
      setCorrectAnswers( (prev) =>({...prev,[idx]: true}))
    }
    const length = Object.values(check).length
    const correct = giveCorrect(check,length)
    SetCurrentQuestion(prev =>( {...prev, true: correct } ) )

  })
  
  
  
  const hadleLastField = (idx) => (event) =>{
    setCorrectAnswers({...correctAnswers,[idx+1]: false})
    setIt(prev =>{ console.log("prev",prev); return(prev+1)  })
  }
  
  const handlerQuestionField  = (event) => {
    SetCurrentQuestion(prev =>( {...prev, question:event.target.value } ) )
    
  }
  
  const debouncedQuestionField = useCallback(
     handlerQuestionField
   , [])
  

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off"> 
        <TextField id="outlined-basic2" value = {currentQuestion.question} label="Enter a answer" onChange = {debouncedQuestionField}/>
      </form>

      <Divider variant="middle" className = {classes.cen} />
      
      <HOCFormNext answers = {currentQuestion?.answers} 
        text = {props.text}
        it={it} 
        correctAnswers = {correctAnswers}
        checkHandler = {checkHandler} 
        textHandler = {textHandler}
        hadleLastField = {hadleLastField}
        currentTextState =  { {...currentQuestion} }
        updatePage = {hadlerUpdate}  

      />
      
      {/* <Buttons currentTextState = {  {...currentQuestion}} updatePage = {hadlerUpdate} /> */}
    </>
  )
}

//export default React.memo(NextTextFields)