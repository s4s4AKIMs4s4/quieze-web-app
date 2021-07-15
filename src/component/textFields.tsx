import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

import { useState,useRef } from "react";
import { convertCompilerOptionsFromJson } from 'typescript';
import { cloneElement } from 'react';
import { Grid } from '@material-ui/core';
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

export default function BasicTextFields() {
  const classes = useStyles();
  const inputEl = React.useRef<HTMLDivElement | null>(null)

  const [isClick, setClick] = React.useState(true);
  function handlebuttom ( ){
    //переписать с помощью Useref
    let ref = inputEl.current
    console.log(ref?.children[0].cloneNode(true))
    let element = ref?.children[0].cloneNode(true) as Node
    if(ref?.children.length === 8){
      return
    }
    element.addEventListener('click',handlebuttom)
    ref?.children[ref?.children.length - 1].removeEventListener('click',handlebuttom)
    setClick(false)
    ref?.appendChild(element)


   
  }
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
     

        <TextField  id="outlined-basic" label="Enter a question" className = {classes.question} />
        
      </form>
      <Divider variant="middle" className = {classes.cen} />
      <form  className={classes.cen} noValidate autoComplete="off">
        <div className={classes.textRoot}>
          <Grid container spacing={5}  ref={inputEl}>

            <Grid item xs={6} sm={3}>
              <TextField id="outlined-basic1" label="Enter a answer" variant="outlined" />
            </Grid>
            
            <Grid item xs={6} sm={3}>
            <TextField id="outlined-basic2" label="Enter a answer" variant="outlined" />
            </Grid>

            <Grid item xs={6} sm={3}>
            <TextField id="outlined-basic2" label="Enter a answer" variant="outlined" />
            </Grid>
            
            {isClick ?
              <Grid item xs={6} sm={3}>
                <TextField id="outlined-basic3" label="Enter a answer" variant="outlined" onClick = {handlebuttom} />
                </Grid>
                :
              <Grid item xs={6} sm={3}>  
                <TextField id="outlined-basic3" label="Enter a answer" variant="outlined"/>
              </Grid> }
          </Grid>
        </div>
       
      </form>

    </>
  );
}