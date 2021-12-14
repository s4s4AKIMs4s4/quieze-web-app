import React, {useCallback} from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import {uploand, back} from '../../../redux/actions'
import useStyles from '../../cssModules/nextButtons';
import {questionType} from '../../../redux/types'
import {initCurrentQuestionType} from '../nextTextFields'


interface IButtons{
  updatePage?: any,
  text: questionType,
  currentTextState:initCurrentQuestionType,
  handleSaveClick: ()=>void,
  index: number,
}




function Buttons(props: IButtons) {
  const classes = useStyles();   
  const dispatch = useDispatch()

  const handlerNextClick = () => {
    console.log('index')
      dispatch(uploand(props.currentTextState));
      props.updatePage()
  }

  const handlerBack = () =>{
    if(props.index !== 0){
      dispatch(back(props.text, props.currentTextState, props.index))
    }
  }

  const MemoHandlerBack = useCallback((
    handlerBack
  ), [props.index])


  return(
    <div>
            <form className={classes.test} noValidate autoComplete="off">
              <div className={classes.middle}>
                  <Button  onClick = {handlerBack}> Back</Button>
                  <Button  onClick = {handlerNextClick}>Next</Button>  
                  <Button  onClick={props.handleSaveClick}>  
                    Save
                  </Button>        
              </div>
            </form>

    </div>  
      
  );
}
export default React.memo(Buttons)