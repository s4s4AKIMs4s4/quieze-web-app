import React from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../cssModules/backTextFields';


export default function Form(props){
    const classes = useStyles()
    
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

    const getNextList = () => {
        let list = new Array(props.it)
        for(let i = 0 ;i<=props.it;i++){
            if( checkfornumber(props.answers,i) )
                list[i] = props.answers[i]
            else
                list[i] = ''
        }
        return list
    }

    const getBackList = () => {
        let list =  [...props.text]
        for(let i = props.text.length;i<=props.it;i++){
            list[i] = ''
        }
        return list 
    }
    
    function getListOfTextFields(){
        let listOfTextFields:string[]
        if( props.text !== 1){
            listOfTextFields =  getBackList()
        }
        else{
            listOfTextFields = getNextList()
        }
        return listOfTextFields
      }
    
    let textFieldJsx = (val,idx) => {
        
        return (
        <>
          <FormControlLabel
            control={<Checkbox  checked={props.correctAnswers[idx]} onChange = {props.checkHandler(idx)} name="gilad" />}
            label="Correct answer"
          />
  
          {(idx === props.it)
            ?<TextField id="outlined-basic2" value = {val} className = "text" onChange={props.textHandler(idx)} onClick = {props.hadleLastField(idx)}/> 
            :<TextField id="outlined-basic2" value= {val}  onChange={props.textHandler(idx)} className = "text"  />
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