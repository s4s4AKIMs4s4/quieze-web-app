import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider';

import { Grid } from '@material-ui/core';
import Buttons from './Burroons'
import { queryByTestId } from '@testing-library/react';
import { useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { chmodSync } from 'fs';







const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textRoot:{
      flexGrow: 1,
      position:'relative',
      justifyContent:'flex-end',
    },
    root: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {

        margin: theme.spacing(3),
        width: '80%',
        marginTop: '40px',
        marginLeft: '10%',
        marginRight: '10%'
        // backgroundColor: theme.palette.primary.dark,


      },
    },
    cen: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {
        marginTop: '5em',
        width: '100%',
        marginLeft:'3px'
      },
    },
    question:{  
      marginTop:'5vh',
    },
    but: {
      '& > *': {
        position:'fixed',
        marginTop: '45vh',
        
      }
      
    },
  }),
);

export default function BasicTextFields(props) {
  const classes = useStyles();
  const inputEl = React.useRef<HTMLDivElement | null>(null)
  const first = React.useRef<HTMLInputElement | null>(null)
  const [it, setIt] = React.useState(props.text)
  const [reUdate,setReUpdate] = React.useState(false)
  const [mainField,setMainField] = React.useState("")
 // const [index,seIndex] = React.useState(-1)
  let index = -1



  const [checherIdx,setcherIdx] = React.useState({
    0:false
  })



  


  const i:number[] = []  
  let init: string[] = []
  const [query, SetQuery] = React.useState(
    {
      "question": "",
      "answers":init,
      "true": i,
    }
  ) 
  
  // const [true:[], setTrue] = React.useState(i)
  
  useEffect(() => {
    index = -1
    setIt(1)
    return () => {
      
      setIt(1)
    }
  }, [])


useEffect(()=>{
  setIt(1)
  SetQuery({
    "question": "",
    "answers":init,
    "true": i,
  })
  
  setcherIdx({
    0:false
  })
  if(first.current !== null){ 
    first.current!.value = '' 
  }
  index = -1



},[reUdate])


const hadlerUpdate = () =>{
  const ch = !reUdate
  setReUpdate(ch)
  if(first.current !== null){ 
    first.current!.value = '' 
  }
  console.log(reUdate)
}


function loop(){
    let mas:number [] = new Array(it)
    for(let i = 0;i<it;i++){
      mas[i] = i
    }
    return mas
  }

  let textHandler = (idx) =>( (event) => {
      //запомниает???
      // let mas = query?.answers 
      // mas[idx] = event.target.value
      // console.log(`mas - ${query.answers[0]}`)
      const mas  = query?.answers
      mas[idx] = event.target.value

      // checherIdx[idx+1] = false
      // setcherIdx({...checherIdx,[idx+1]: false})
      SetQuery(prev =>( {...prev, ["answers"]: mas } ) )

     
      // const correct:any = Object.values(checherIdx).filter(  (val:any) =>  checherIdx[val] )

      // const values = Object.values(checherIdx)

      // let correct: number[] = [] 
      // for(let it  = 0 ; it<values.length; it++){
      //   if(checherIdx[it])
      //     correct.push(it)  
      // }


      // SetQuery(prev =>( {...prev, true: correct } ) )
      
      // console.log(query)
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


  const checkerHandler = (idx) => ((event) => {
    let check = {...checherIdx}

    if(checherIdx[idx] ){
      check[idx] = false      
      setcherIdx( (prev) =>({...prev,[idx]: false}))
    }
    else {
      check[idx] = true 
      setcherIdx( (prev) =>({...prev,[idx]: true}))
    }
    const length = Object.values(check).length
    const correct = giveCorrect(check,length)
    SetQuery(prev =>( {...prev, true: correct } ) )

    //setcherIdx( (prev) =>({...prev,[idx]: true}))
    //setcherIdx({...checherIdx,[idx+1]: false})
    // if(idx >= Object.values(checherIdx).length){
    //   check[idx] = false
    //   const values = Object.values(checherIdx)
    //   const correct = giveCorrect(values)
    //   SetQuery(prev =>( {...prev, true: correct } ) )
    // }
    // else{

    // }

    // if(checherIdx[idx] ){
      
    //   // setcherIdx( (prev) =>({...prev,[idx]: false}))
    // }
    // else {
    //   // setcherIdx( (prev) =>({...prev,[idx]: true}))
    // }
    //  const values = Object.values(checherIdx)

    //   let correct: number[] = [] 
    //   for(let it  = 0 ; it<values.length; it++){
    //     if(checherIdx[it])
    //       correct.push(it)  
    //   }

    //   console.log(checherIdx)
    //   console.log(correct)
    //   //SetQuery({...query,true:correct})
    //   SetQuery(prev =>( {...prev, true: correct } ) )
    // // (!checherIdx[idx]) ? checherIdx[idx] = true : checherIdx[idx] = false
    
  })

  const hadleLastClick = (idx) => (event) =>{
    setcherIdx({...checherIdx,[idx+1]: false})
    setIt(it+1)
    if(first.current !== null){ 
      first.current!.value = '' 
    }
    console.log('first')
    console.log(first.current!.value)
  }


  let textFieldJsx = (idx) => {
    
    if(idx === it-1){
      
      if(idx === 0){
        return(
        <>
        <FormControlLabel
        control={<Checkbox   checked={checherIdx[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
        label="Correct answer"
        />
      <TextField ref = {first} id="outlined-basic2" label="Enter a answer" value = {query.answers[idx]} className = "text" onChange={textHandler(idx)} onClick = {hadleLastClick(idx)}/>
      </>
      )
      }
      // else
      return (
        <>
        <FormControlLabel
        control={<Checkbox checked={checherIdx[idx]} onChange = {checkerHandler(idx)}  name="gilad" />}
        label="Correct answer"
        />
      <TextField id="outlined-basic2" label="Enter a answer" className = "text" value = {query.answers[idx]} onChange={textHandler(idx)} onClick = {hadleLastClick(idx)}/>
      </>
      )    
      
    }
    else{

      if(idx === 0 ){
      return(
      <>
      <FormControlLabel
        control={<Checkbox checked={checherIdx[idx]} value = {query.answers[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
        label="Correct answer"
        />
      <TextField  ref = {first} id="outlined-basic2" label="Enter a answer" onChange={textHandler(idx)} className = "text"  /> 
      </>
      )
      }
      else
      return (

      <>
        <FormControlLabel
        control={<Checkbox checked={checherIdx[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
        label="Correct answer"
        />
      <TextField id="outlined-basic2" label="Enter a answer" value = {query.answers[idx]} onChange={textHandler(idx)} className = "text"  /> 
      </>
      ) 
    }
  }

 const content = loop()?.map((val, idx) =>
  (<Grid item xs={6} sm={3} key = { index++ }  >        
    {textFieldJsx(idx)}   
  </Grid>)
 )


 const handlerMainField  = (event) => {
  SetQuery(prev =>( {...prev, question:event.target.value } ) )

 }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic2" value = {query.question} label="Enter a answer" onChange = {handlerMainField}/>
        
        
      </form>
      <Divider variant="middle" className = {classes.cen} />
      <form  className={classes.cen} noValidate autoComplete="off">
        <div className={classes.textRoot}>
       
          <Grid container spacing={5}  ref={inputEl}>
            {content}
          </Grid>
        
        </div>
        <Buttons textState = {  {...query}} functions = {hadlerUpdate} />
      </form>

    </>
  )
  }