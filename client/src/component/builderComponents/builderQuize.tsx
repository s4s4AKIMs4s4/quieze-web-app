import React from 'react';
import Menu from '../commonComponents/menu'
import NextTextFields from './nextTextFields'
import Papers from './paper'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import {BackTextFields} from './backTextFields'






export default function Quize(){
    let allQuestions  = useSelector( (state:RootState) => state.answer.text)
    let currentQuestion: number = useSelector( (state:RootState) => state.answer.index) + 1
    let pressedButton: string = useSelector( (state:RootState) => state.answer.buttonString)
    allQuestions = JSON.parse(JSON.stringify(allQuestions))
    
    const getCorrectAnswers = (indexOfCorrectAnswers, allQuestions) => {
        let correctAnswers = {}

        allQuestions.forEach((val,index) => correctAnswers[index] = false  )

        indexOfCorrectAnswers.forEach((val) =>{ 
            correctAnswers[val] = true
        })
        
        correctAnswers[allQuestions.length] = false
        return correctAnswers

    }


    function pickPageForRendor() {
        if (pressedButton === "BACK" || pressedButton === "UPDATE" ){ 
            const correctAnswers = getCorrectAnswers(allQuestions[currentQuestion].true, allQuestions[currentQuestion].answers  )
            return (<BackTextFields text = {allQuestions[currentQuestion].answers} obj = {allQuestions[currentQuestion]} correct = {correctAnswers}/>)
        }

        return(<NextTextFields text = {1}/>)        
       
    }
       
    return (
        <div>
        <Menu/>
        <Papers>
            {pickPageForRendor()}
        </Papers>
        </div>
        )
    
}