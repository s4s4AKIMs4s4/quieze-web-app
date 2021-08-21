import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../cssModules/backTextFields';


export default function HOCForm(Buttons ,getList){
    return function HH(props){
        
        const classes = useStyles();

        let textFieldJsx = (val, idx) => {
            return (
            <>
              <FormControlLabel
                    control={<Checkbox  checked={props.correctAnswers[idx]} onChange = {props.checkHandler(idx)} name="gilad" />}
                label="Correct answer"
              />
      
              {(idx === props.it)
                ?<TextField value = {val} className = "text" onChange={props.textHandler(idx)} onClick = {props.hadleLastField(idx)}/> 
                :<TextField  value= {val}  onChange={props.textHandler(idx)} className = "text"  />
                }
            </>
            )    
        }

        const listTextFields = getList(props)?.map((val, idx) =>
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
            <Buttons currentTextState = {  props.currentTextState} updatePage = {props.updatePage} />
          </>
        )
    }
}