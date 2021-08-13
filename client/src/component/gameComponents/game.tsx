
import { useState, useEffect } from 'react';
import axios from 'axios'
import Menu from '../commonComponents/menu'
import BackDrop from '../commonComponents/backDrop'
import Buttons from './buttons'

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

export default  function Game(props){
    
    const initText = {
        question: "nul",
        answers:['null'],
        true:[0]
    }
    
    const  [text,setText] = useState( [{  ...initText }])
    const [idx,setIdx] = useState(0)
    const [answer,setAnswer] = useState(initText)
    const [louder, setLouder] = useState(true)
    
    const getQuestion = async id => {
        return await axios.get(`${url}/notes/${id}.json`)
    }

    useEffect(()=>{
        getQuestion(props.match.params.id).then(res =>{
                setText(prev =>  JSON.parse(JSON.stringify(res.data)) ); 
                setIdx(prev => prev+1); 
                setLouder(false) 
            })
    },[]);

    useEffect(function () {
        setAnswer(text[idx])
    }, [idx])
    
    const resetStyles = () => {
        setTimeout(() =>  {
            if(idx === text.length -1)
                setIdx(idx)
            else
                setIdx(idx+1)
        }, 2000 )
    }

    const handlerAnswers = (index) => (event) => {
        const trueList = answer.true.filter(val => 
            (val === index)
        );

        if(trueList.length === 0)
            event.currentTarget.style.backgroundColor = 'red'
        resetStyles()
    }

    return (
        <>
        <Menu/>
        <div>
            {
                !louder      
                    ? <Buttons answer = {answer} handlerIdx = {handlerAnswers} /> 
                    : <BackDrop louder = {louder}/>
            }
        </div>
    </>
    )
}