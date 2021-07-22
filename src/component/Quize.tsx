import React from 'react';
import Menu from './menu'
import Main from '../test'
import Forms from './textFields'
import Forms2 from './textFields2'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Papers from './papers'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { useState } from 'react';
import {Basic} from './Back'

export default function Quize(){
    const [f,setF] = useState(true)
    let text  = useSelector( (state:RootState) => state.answer.text)
    let gener  = useSelector( (state:RootState) => state.answer)
    let index: number = useSelector( (state:RootState) => state.answer.index)
    let buttonString: string = useSelector( (state:RootState) => state.answer.buttonString)
    text = JSON.parse(JSON.stringify(text))
    console.log(gener)
    let Text = <TextField id="outlined-basic1" label="Enter question" />

    function checher () {
        console.log('answers')
        console.log(text)
        console.log("buttonString")
        console.log(buttonString)
        if (buttonString === "BACK"){ 
            console.log('index')
            console.log(index)
            console.log('---------------------------------------------')
            return (<Basic text = {text[index+1].answers} obj = {text[index+1]} />)
        }
        else if(buttonString === "UPDATE"){
            console.log('index')
            console.log(index)
            
            console.log('---------------------------------------------')
            return (<Basic text = {text[index+1].answers} obj = {text[index+1]} />)
        }
        // else if (buttonString === "NEXT") return 
        // else if ( buttonString === "UPDATE"){

        // }
        else if(index % 2 == 0) return(<Forms text = {4}/>)        
        else return (<Forms2 text = {1}/>)
    }
       
    return (
        <div>
        <Menu/>
        <Papers>
            {checher()}
        </Papers>
        </div>
        )
    
}