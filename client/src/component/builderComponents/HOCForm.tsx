import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../cssModules/backTextFields';
import {checkMap, initCurrentQuestionType} from '../builderComponents/nextTextFields'

// text = {props.text}
// it={it} 
// correctAnswers = {correctAnswers}
// checkHandler = {checkHandler} 
// textHandler = {textHandler}
// hadleLastField = {hadleLastField}
// currentTextState =  { {...currentQuestion} }
// updatePage = {hadlerUpdate}  

interface IHOCForm{
  textHandler: Function,
  it: number,
  updatePage?: () => void,
  correctAnswers: checkMap,
  checkHandler:Function,
  text?: string[],
  hadleLastField: Function,
  currentTextState:initCurrentQuestionType,
  answers?:string[]
}


export default function HOCForm(Buttons ,getList:Function){
    return function HH(props: IHOCForm){
        
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

