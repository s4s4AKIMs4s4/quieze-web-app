import React, {useCallback} from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import {uploand, back, setLink, update} from '../../../redux/actions'
import { RootState } from '../../../redux/rootReducer';
import { useHistory } from 'react-router-dom';
import useStyles from '../../cssModules/nextButtons';
import axios from 'axios'
import { useState } from 'react';
import BackDrop from '../../commonComponents/backDrop'

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'
const domen = 'http://localhost:3000'

function Buttons(stateToReducer) {
  const classes = useStyles();   
  const text  = useSelector( (state:RootState) => state.answer.text)
  const index: number = useSelector( (state:RootState) => state.answer.index)
  const [louder, setLouder] = useState(false)
  const length = text.length  

  const dispatch = useDispatch()
  const history = useHistory();

  const handlerNextClick = () => {
    dispatch(update(text, stateToReducer.currentTextState, index,length));
  }





  const handlerBack = () =>{
    if(index !== 0){
      dispatch(back())
    }
  }

  const MemoHandlerBack = useCallback((
    handlerBack
  ), [index])


  const MemoNextClick = useCallback((
    
    handlerNextClick
  ), [index])

  const handleSaveClick = async () => { 
    setLouder( prev => !prev)
    const res = await axios.post(`${url}/notes.json`, text)
    setLouder( prev => !prev)

    let link  = `${domen}/gameNotes/${res.data.name}`
    dispatch(setLink(link))
    console.log(link)

    history.push('/game');

  }

  return(
    <div>
    {
      (!louder)
        ?  <form className={classes.test} noValidate autoComplete="off">
              <div className={classes.middle}>
                  <Button  onClick = {MemoHandlerBack}> Back</Button>
                  <Button  onClick = {handlerNextClick}>Next</Button>  
                  <Button  onClick={handleSaveClick}>  
                    Save
                  </Button>        
              </div>
            </form>
        : <BackDrop louder = {louder}/>
    }
  </div>  
      
  );
}
export default React.memo(Buttons)