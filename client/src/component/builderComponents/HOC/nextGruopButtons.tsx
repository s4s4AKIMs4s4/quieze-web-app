import React, {useCallback, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import {uploand, back, setLink, update} from '../../../redux/actions'
import { RootState } from '../../../redux/rootReducer';
import { useHistory } from 'react-router-dom';
import useStyles from '../../cssModules/nextButtons';
import axios from 'axios'
import { useState } from 'react';
import BackDrop from '../../commonComponents/backDrop'
import {apiFireBase} from '../abstaraction/webAbstraction'


function Buttons(stateToReducer) {
  const classes = useStyles();   
  const text  = useSelector( (state:RootState) => state.answer.text)
  const index: number = useSelector( (state:RootState) => state.answer.index)
  const [louder, setLouder] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory();

  // const [firebase: apiFireBase | null,  setFireBase] = useState(null)

  // useEffect(()=>{
  //     firebase = new apiFireBase()
  //     console.log('init fareBase')
  //     console.log(firebase)
  //     return ()=>{
  //       console.log('out fireBase')
  //       firebase = null
  //     }
  //   }
  //   ,[])

  const handlerNextClick = () => {
    console.log('index')
      dispatch(uploand(stateToReducer.currentTextState));
      //update page
      stateToReducer.updatePage()
  }

  const MemoNextClick = useCallback((
    
    handlerNextClick
  ), [index])

  const handlerBack = () =>{
    console.log('index: ', index) 
    if(index !== 0){
      dispatch(back())
    }
  }

  const MemoHandlerBack = useCallback((
    handlerBack
  ), [index])

  const handleSaveClick = async () => { 
    setLouder( prev => !prev)
    const firebase: apiFireBase = new apiFireBase()
    console.log('fire base')
    console.log(firebase)
    const res = await firebase?.sendPost('notes.json', text)
    //const res = await axios.post(`${url}/notes.json`, text)
    setLouder( prev => !prev)

    const link  = `${firebase?.domen}/gameNotes/${res?.data.name}`
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