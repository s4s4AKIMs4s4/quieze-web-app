
import React, { useState, useEffect } from 'react';
import Menu from '../commonComponents/menu'
import BackDrop from '../commonComponents/backDrop'
import Buttons from './buttons'
import { apiFireBase } from '../builderComponents/abstaraction/webAbstraction';

export default  function Game(props: any){
    
    const initText = {
        question: "nul",
        answers:['null'],
        true:[0]
    }
    
    const  [text,setText] = useState( [{  ...initText }])
    const [idx,setIdx] = useState(0)
    const [answer,setAnswer] = useState(initText)
    const [louder, setLouder] = useState(true)
    const [isEnd, setEnd] = useState<boolean>(false)
    
    const getQuestion = async id => {
        const firebase: apiFireBase = new apiFireBase()
        return await  firebase.GetPost(id)
        
    }

    useEffect(()=>{
        console.log('hello')
        getQuestion(props.match.params.id).then(res =>{
                setText(prev =>  JSON.parse(JSON.stringify(res.data))  ); 
                setIdx(prev => prev+1); 
                console.log(res.data)
                setLouder(false) 
            })
    },[]);

    useEffect(function () {
        setAnswer(text[idx])
    }, [idx])
    
    const resetStyles = () => {
        setTimeout(() =>  {
            if(idx === text.length -1){
                setIdx(idx)
                setEnd(true)
            }
            else
                setIdx(idx+1)
        }, 1000 )
    }

    const handlerAnswers = (index) => (event: React.MouseEvent<HTMLButtonElement> ) => {
        const trueList = answer.true.filter(val => 
            (val === index)
        );

        if(trueList.length === 0)
            event.currentTarget.style.backgroundColor = 'red'
        resetStyles()
    }
    const rendorGame = () => {    
        if(!isEnd){
                if(!louder){    
                    return <Buttons answer = {answer} handlerIdx = {handlerAnswers} /> 
                }
                else{
                    return <BackDrop louder = {louder}/>
                }
        }   
        else{
            return <Buttons answer = {answer.answers} handlerIdx = {handlerAnswers} /> 
        }
    }

    return (
        <>
        <Menu/>
        <div>
            {rendorGame()}
        </div>
    </>
    )
}