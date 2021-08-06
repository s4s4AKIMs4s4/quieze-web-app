import React from 'react';
import Menu from './menu'
import Forms from './nextTextFields'
import Papers from './papers'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { useState } from 'react';
import {Basic} from './backTextFields'






export default function Quize(){
    const [f,setF] = useState(true)
    let text  = useSelector( (state:RootState) => state.answer.text)
    let gener  = useSelector( (state:RootState) => state.answer)
    let index: number = useSelector( (state:RootState) => state.answer.index)
    let buttonString: string = useSelector( (state:RootState) => state.answer.buttonString)
    text = JSON.parse(JSON.stringify(text))
    console.log(gener)

    let cherIdx = {}



    const mappingChecherIdx = (correct) => {
        for( let i = 0 ;i < text.length;i++){
            cherIdx[i] = false
        }
        correct.forEach((val) =>{ 
            let v = val
            cherIdx[val] = true
        })  
    }


    function checher () {

        if (buttonString === "BACK" || buttonString === "UPDATE" ){ 
            mappingChecherIdx(text[index+1].true)
            return (<Basic text = {text[index+1].answers} obj = {text[index+1]} correct = {cherIdx}/>)
        }

        else return(<Forms text = {1}/>)        
       
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