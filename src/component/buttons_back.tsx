import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import { useCallback } from 'react';
import {uploand, back,update} from '../redux/actions'
import { RootState } from '../redux/rootReducer';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {inside} from '../redux/textReducer'
import { ContactSupportOutlined } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test:{
        position:'relative',
        top:'1vh',
        left:'32vw',
        
      },
    })
)


export default function Buttons(state_l) {
    const classes = useStyles();
   
    const s2 = Object.assign({},state_l.textState)
    // state_l = {'s':'s'}
    // const palletType = useSelector( (state:RootState) => state.palet.isDark)
    
    let text  = useSelector( (state:RootState) => state.answer.text)
    let index: number = useSelector( (state:RootState) => state.answer.index)
    //let length: number = useSelector( (state:RootState) => state.answer.text)
    let length = text.length  
    // console.log('index')
    // console.log(index)
    // // console.log(text[index].textState)
    // console.log('массив')
    
    // console.log(text[index])
    
    // console.log('объект из редюсера')
    // console.log(text  )
    const dispatch = useDispatch()
    // const nextHandler = () =>{
    //   console.log('а я я ')
    //   dispatch(uploand(state_l.textState))
    // }
    let Gener  = useSelector( (state:RootState) => state.answer)
    const handlerNext = () => {
      console.log("inside buttons")
      
      console.log(Gener)
      console.log(index)
      console.log(s2)
      console.log(`len - ${length}`)
      dispatch(update(text,s2,index,length));
    }

    const handlerBack = () =>{
      dispatch(back())
    }

    return(
        <form className={classes.test} noValidate autoComplete="off">
            <div>
            
                <Button onClick = {handlerBack}> Back</Button>
                <Button onClick = {handlerNext}>Next</Button>
                <Button>Save</Button>
            
            </div>
        </form>
        );

}