import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Buttons from './nextButtons'
import { useEffect,useMemo } from 'react';
import useStyles from '../cssModules/nextTextFields';
import FormNext from './FormNext';
import debounce from 'lodash.debounce';
import HOCForm from './HOCForm';
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
    0:false,
    1:false,
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
      0:false,
      1:false,
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

  const textHandlert = (event) =>{
    
      //event.persist()
     // console.log(event.target.value)
  } 

  const debouncedTextHandler = useCallback(
    (idx) => textHandler(idx)
  , [])



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

 const debouncedLastField= useCallback(
  (idx) => hadleLastField(idx)
  , [])


 const debouncedQuestionField = useCallback(
    handlerQuestionField
  , [])


  const checkfornumber = (values, index) => {
    if(values.length === 0)
        return false
    const res = values.filter(
        (val,ind) => (val !== '' && ind === index ) 
     )
    if(res.length>0){
        return true
    }
}

  // const HOCFormNext = HOCForm(
  //   FormNext, 
  //   (props) => {
  //     let list = new Array(props.it)
  //     for(let i = 0 ;i<=props.it;i++){
  //         if( checkfornumber(props.answers,i) )
  //             list[i] = props.answers[i]
  //         else
  //             list[i] = ' '
  //     }
  //     return list
  //   }
  // )




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
        textHandler = {debouncedTextHandler}
        hadleLastField = {hadleLastField}
        currentTextState =  { {...currentQuestion} }
        updatePage = {hadlerUpdate}  

      />
      
      {/* <Buttons currentTextState = {  {...currentQuestion}} updatePage = {hadlerUpdate} /> */}
    </>
  )
}

