import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useState,useRef } from "react";
import { convertCompilerOptionsFromJson } from 'typescript';
import { cloneElement } from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

        margin: theme.spacing(0.1),
        width: '30ch',
        marginTop: '5em',
        marginLeft: '8vh',
        
        // backgroundColor: theme.palette.primary.dark,


      },
    },
    question:{
      marginTop:'5vh',
    },
    but: {
      '& > *': {

        margin: theme.spacing(1),
        marginTop: '15%',
        marginLeft: '70%'
      }
      
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();
  const inputEl = React.useRef<HTMLFormElement | null>(null)
  const [isClick, setClick] = React.useState(true);
  function handlebuttom ( ){
    //переписать с помощью Useref
    let elements = document.querySelectorAll('.makeStyles-cen-24')
    let elementText =document.querySelectorAll('.MuiTextField-root')
    let copy =elementText[1].cloneNode(true)
    copy.addEventListener('click',handlebuttom)    
    elements[elements.length - 1].appendChild(copy)
    setClick(false)
    let elementText1 =document.querySelectorAll('.MuiTextField-root')
    console.log(elementText1[elementText1.length - 2])
    elementText1[elementText1.length - 2].removeEventListener('click',handlebuttom)
    // let ref = inputEl.current
    // console.log(document.styleSheets)
  }
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Standard"  />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}

        <TextField  id="outlined-basic" label="Enter a question" className = {classes.question} />
        
      </form>
      <Divider variant="middle" className = {classes.cen} />
      <form ref={inputEl} className={classes.cen} noValidate autoComplete="off">
        <TextField id="outlined-basic1" label="Enter a answer" variant="outlined" />
        <TextField id="outlined-basic2" label="Enter a answer" variant="outlined" />
        {isClick ? <TextField id="outlined-basic3" label="Enter a answer" variant="outlined" onClick = {handlebuttom} />:
        <TextField id="outlined-basic3" label="Enter a answer" variant="outlined"/>}
        
       
      </form>
      <form className={classes.but} noValidate autoComplete="off">
        <div>
        <Button>Back</Button>
        <Button>Next</Button>
        <Button>Save</Button>
        </div>
      </form>
    </>
  );
}