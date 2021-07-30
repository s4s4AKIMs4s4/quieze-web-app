import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Buttons from './buttons_back'
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



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

export  function Basic(props) {
  const classes = useStyles();
  const inputEl = React.useRef<HTMLDivElement | null>(null)
  const [it, setIt] = React.useState(props.text.length)
  const [checherIdx,setcherIdx] = React.useState(props.correct)






  const [query, SetQuery] = React.useState(
    props.obj
  ) 
  useEffect(() => {
    console.log('props.obj')
    setIt(props.text.length)
    SetQuery(props.obj)
    console.log(props.obj.true)
    console.log(Array.isArray(props.obj.true))
  
    
    return () => {
    
      setIt(1)
    }
  }, [props.obj])


  let init: string[] = []
  function loop(){
    let mas:string [] =  [...props.text]
    for(let i = props.text.length;i<=it;i++){
      mas[i] = ''
    }
    return mas
  }

  let textHandler = (idx) =>( (event) => {
      const mas  = query?.answers
      mas[idx] = event.target.value
      console.log('value')
      console.log(mas[idx])
      SetQuery(prev =>( {...prev, ["answers"]: mas } ) )

      // const values = Object.values(checherIdx)

      // let correct: number[] = [] 
      // for(let it  = 0 ; it<values.length; it++){
      //   if(checherIdx[it])
      //     correct.push(it)  
      // }


      // SetQuery(prev =>( {...prev, true: correct } ) )
      
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
    
  })


  const hadleLastClick = (idx) => (event) =>{
    setcherIdx({...checherIdx,[idx+1]: false})
    setIt(it+1)
  }



  let textFieldJsx = (val,idx) => {
    if(idx === it){
      return (
      <>
        <FormControlLabel
          control={<Checkbox  checked={checherIdx[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
          label="Correct answer"
        />
        <TextField id="outlined-basic2" className = "text" onChange={textHandler(idx)} onClick = {hadleLastClick(idx)}/>
      </>
      )    
    }
    else if(idx >= props.text.length) {
      return (
      <>
      <FormControlLabel
          control={<Checkbox  checked={checherIdx[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
          label="Correct answer"
        />
      <TextField id="outlined-basic2"  value = {val} onChange={textHandler(idx)} className = "text"  /> 
      </>
      ) 
    }
    else{
      return (
        <>
          <FormControlLabel
          control={<Checkbox  checked={checherIdx[idx]} onChange = {checkerHandler(idx)} name="gilad" />}
          label="Correct answer"
          />
          <TextField id="outlined-basic2"  value = {val} onChange={textHandler(idx)} className = "text"  />
       </>
       ) 
    }
  }

 const content = loop()?.map((val, idx) =>
  (<Grid item xs={6} sm={3} key = {idx}>        
    {textFieldJsx(val,idx)}   
  </Grid>)
 )
 const handlerMainField  = (event) => {
  SetQuery(prev =>( {...prev, question:event.target.value } ) )
 }
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic2" label="Enter a answer" value ={query.question} onChange ={handlerMainField} />
        
        
      </form>
      <Divider variant="middle" className = {classes.cen} />
      <form  className={classes.cen} noValidate autoComplete="off">
        <div className={classes.textRoot}>
          <Grid container spacing={5}  ref={inputEl}>
            {content}
          </Grid>
        </div>
        <Buttons textState = {  {...query}}/>
      </form>

    </>
  )
  }