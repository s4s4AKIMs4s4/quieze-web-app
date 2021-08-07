import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import { useCallback } from 'react';
import {uploand, back} from '../../redux/actions'
import { RootState } from '../../redux/rootReducer';
import { useHistory } from 'react-router-dom';
import useStyles from '../cssModules/nextButtons';
import axios from 'axios'


const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'
const domen = 'http://localhost:3000'

export default function Buttons(state_l) {
    const classes = useStyles();
   
    const s2 = Object.assign({},state_l.textState)
    const text  = useSelector( (state:RootState) => state.answer.text)
    const index: number = useSelector( (state:RootState) => state.answer.index)
    const length = text.length  

    const dispatch = useDispatch()

    const history = useHistory();

    const handler = () => {
      dispatch(uploand(s2));
      state_l.functions()
    }

    const handlerBack = () =>{
      if(index !== 0){
        dispatch(back())
      }
      
    }


    

    const handleClick = async () => { 
      // console.log(s2)
      // const payloud =  JSON.parse(JSON.stringify(s2))
      // console.log(payloud)
      const note = {
        all:text
      }
  




      console.log('text')
      console.log(text)
      const res = await axios.post(`${url}/notes.json`, note)
      let link  = `${domen}/gameNotes/${res.data.name}`
      console.log('link')
      console.log(res.data)
      console.log(link)
      //history.push('/game');
      
    }

    return(
        <form className={classes.test} noValidate autoComplete="off">
            <div>
            
                <Button onClick = {handlerBack}> Back</Button>
                <Button onClick = {handler}>Next</Button>
                
                <Button onClick={handleClick}>  
                  Save
                </Button>
                
            
            </div>
        </form>
        );

}