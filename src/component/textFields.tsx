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
        marginTop: '9em',
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
  const [it, setIt] = React.useState(4)



  function loop(){
    let mas:number [] = new Array(it)
    for(let i = 0;i<it;i++){
      mas[i] = i
    }
    return mas
  }
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
     
      <TextField id="outlined-basic2" label="Enter a answer"/>
        
        
      </form>
      <Divider variant="middle" className = {classes.cen} />
      <form  className={classes.cen} noValidate autoComplete="off">
        <div className={classes.textRoot}>
          <Grid container spacing={5}  ref={inputEl}>

          {
            loop()?.map ((val, idx) =>{
                
                if(idx === it-1){
                  return <Grid item xs={6} sm={3}>
                     <TextField id="outlined-basic2" label="Enter a answer"  onClick = {()=>{(it<=7)?setIt(it+1):setIt(8)}}/>
                     </Grid>
                }
                return(<Grid item xs={6} sm={3}>
                  <TextField id="outlined-basic2" label="Enter a answer"  />
                </Grid>)
              }   
            )
          }
              
          </Grid>
        </div>
       
      </form>

    </>
  );
}