import React from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Buttons from './backButtons'
import { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../cssModules/backTextFields';


export default function Form(props){
    const classes = useStyles()
    
    
    function getListOfTextFields(){
        let mas:string [] =  [...props.text]
        for(let i = props.text.length;i<=props.it;i++){
          mas[i] = ''
        }
        return mas
      }
    
    let textFieldJsx = (val,idx) => {
   
        return (
        <>
          <FormControlLabel
            control={<Checkbox  checked={props.correctAnswers[idx]} onChange = {props.checkHandler(idx)} name="gilad" />}
            label="Correct answer"
          />
  
          {(idx === props.it)
            ?<TextField id="outlined-basic2" className = "text" onChange={props.textHandler(idx)} onClick = {props.hadleLastField(idx)}/> 
            :<TextField id="outlined-basic2"  value = {val} onChange={props.textHandler(idx)} className = "text"  />
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
  

    return (
        <>

        <form  className={classes.cen} noValidate autoComplete="off">
          <div className={classes.textRoot}>
            <Grid container spacing={5}>
              {listTextFields}
            </Grid>
          </div>
          
        </form>
       
      </>
    )
}