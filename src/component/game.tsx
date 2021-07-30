
import Menu from './menu'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

export default  function Game(){
    // let text  = [
    //     {
    //         question:"Ivan",
    //         answers:["1","2","3","4"],
    //         true:[0]
    //     },  
    //     {
    //         question:"Vadim",
    //         answers:["1","2","3","4","5"],
    //         true:[1]
    //     }, 
    // ]
    let text  = useSelector( (state:RootState) => state.answer.text)
    const [idx,setIdx] = useState(1)
    const [answer,setAnswer] = useState(text[idx])
    
    useEffect(() => {
        setAnswer(text[idx])
    }, [idx])
    const handlerIdx = (index) => (event) => {
        setIdx(idx+1)

        const trueList = answer.true.filter(val => 
            (val === index)
        );
        if(trueList.length > 0){
            console.log("That is correct")
        }
        else
            console.log("Wrong answer")
    }


    const buttons = answer.answers.map((val, idx) => (
        <Button variant="contained" color="primary" onClick = {handlerIdx(idx)}>
                {val}
            </Button>
        )
        
        )

    const questionText = () =>{
        const question = answer.question
        return (question)
    }




    return (
        <div>
            <h2>{questionText()}</h2>
            
            {buttons}
        </div>

    )


}