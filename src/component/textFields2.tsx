import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider';

import { Grid } from '@material-ui/core';
import Buttons from './nextButtons'
import { useEffect } from 'react';




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
  const [it, setIt] = React.useState(props.text)
  useEffect(() => {
    setIt(1)
    return () => {
      setIt(1)
    }
  }, [])


  let init: string[] = []
  const [query, SetQuery] = React.useState(
    {
      "question": null,
      "answers":init,
      "true":"s",
    }
  ) 
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
      SetQuery(prev =>( {...prev, ["answers"]: mas } ) )
      // console.log(query)
    }
  )

  let textFieldJsx = (idx) => {
    if(idx === it-1){
      return (<TextField id="outlined-basic2" label="Enter a answer" className = "text" onChange={textHandler(idx)} onClick = {()=>{(it<=7)?setIt(it+1):setIt(8)}}/>)    
    }
    else{
      return (<TextField id="outlined-basic2" label="Enter a answer" onChange={textHandler(idx)} className = "text"  /> ) 
    }
  }

 const content = loop()?.map((val, idx) =>
  (<Grid item xs={6} sm={3} key = {idx}>        
    {textFieldJsx(idx)}   
  </Grid>)
 )

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic2" label="Enter a answer"/>
        
        
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