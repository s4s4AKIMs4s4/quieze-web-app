import React from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Buttons from './backButtons'
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../cssModules/backTextFields';





export  function BackTextFields(props) {
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
    
    return () => {
    
      setIt(1)
    }
  }, [props.obj])

  function getListOfTextFields(){
    let mas:string [] =  [...props.text]
    for(let i = props.text.length;i<=it;i++){
      mas[i] = ''
    }
    return mas
  }

  let textHandler = (idx) =>( (event) => {
      const mas  = currentQuestion?.answers
      mas[idx] = event.target.value
      console.log('value')
      console.log(mas[idx])
      SetCurrentQuestion(prev =>( {...prev, ["answers"]: mas } ) )
    }
  )


  const giveCorrect = (check, length)=>{
    let correct: number[] = [] 
    for(let it  = 0 ; it<length; it++){
      if(check[it])
      correct.push(it)  
    }
    return correct
  }



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








  let textFieldJsx = (val,idx) => {
   
      return (
      <>
        <FormControlLabel
          control={<Checkbox  checked={correctAnswers[idx]} onChange = {checkHandler(idx)} name="gilad" />}
          label="Correct answer"
        />

        {(idx === it)
          ?<TextField id="outlined-basic2" className = "text" onChange={textHandler(idx)} onClick = {hadleLastField(idx)}/> 
          :<TextField id="outlined-basic2"  value = {val} onChange={textHandler(idx)} className = "text"  />
          }
      </>
      )    
    
  }

 const listTextFields = getListOfTextFields()?.map((val, idx) =>
  (
    <Grid item xs={6} sm={3} key = {idx}>        
      {textFieldJsx(val,idx)}   
    </Grid>)
  )





 const handlerQuestionField  = (event) => {
  SetCurrentQuestion(prev =>( {...prev, question:event.target.value } ) )
 }


 
 let rendoringTextFields = (
   <>
     <form className={classes.root} noValidate autoComplete="off">
    
     <TextField id="outlined-basic2" label="Enter a answer" value ={currentQuestion.question} onChange ={handlerQuestionField} />
       
       
     </form>
     <Divider variant="middle" className = {classes.cen} />
     <form  className={classes.cen} noValidate autoComplete="off">
       <div className={classes.textRoot}>
         <Grid container spacing={5}>
           {listTextFields}
         </Grid>
       </div>
       
     </form>
     <Buttons textState = {  {...currentQuestion}}/>
   </>
 )

 return  rendoringTextFields
 
 


  }