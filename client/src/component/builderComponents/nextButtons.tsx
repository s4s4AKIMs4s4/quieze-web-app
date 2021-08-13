import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import {uploand, back, setLink} from '../../redux/actions'
import { RootState } from '../../redux/rootReducer';
import { useHistory } from 'react-router-dom';
import useStyles from '../cssModules/nextButtons';
import axios from 'axios'
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'
const domen = 'http://localhost:3000'

export default function Buttons(state_l) {
    const classes = useStyles();
   
    const s2 = Object.assign({},state_l.textState)
    const text  = useSelector( (state:RootState) => state.answer.text)
    const index: number = useSelector( (state:RootState) => state.answer.index)
    const [louder, setLouder] = useState(false)


    // const length = text.length  

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
      setLouder( prev => !prev)
      const res = await axios.post(`${url}/notes.json`, text)
      setLouder( prev => !prev)

      let link  = `${domen}/gameNotes/${res.data.name}`
      dispatch(setLink(link))
      console.log(link)
      history.push('/game');
      
    }


    const louderJsx = (
      <Backdrop className={classes.backdrop} open={louder}>
          <CircularProgress color="inherit" />
      </Backdrop>
      )


      let FormNuttons = (v) => {
        
        return (<form className={classes.test} noValidate autoComplete="off">
            <div className={classes.middle}>
           
                                  
                
                <Button  onClick = {handlerBack}> Back</Button>
                <Button  onClick = {handler}>Next</Button>
                
                <Button  onClick={handleClick}>  
                  Save
                </Button> 
                
            
            </div>
        </form>
      )
      }


    return(





      <div>
      {
        (!louder)
          ?  <form className={classes.test} noValidate autoComplete="off">
          <div className={classes.middle}>
         
                                
              
              <Button  onClick = {handlerBack}> Back</Button>
              <Button  onClick = {handler}>Next</Button>
              
              <Button  onClick={handleClick}>  
                Save
              </Button> 
              
          
          </div>
      </form>
          : <Backdrop className={classes.backdrop} open={louder}>
              <CircularProgress color="inherit" />
            </Backdrop>
      }
    </div>  
      
  );
}
