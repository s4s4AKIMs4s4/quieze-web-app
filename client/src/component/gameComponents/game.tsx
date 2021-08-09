
import Menu from '../commonComponents/menu'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default  function Game(props){

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


    const initText = {
        question: "nul",
        answers:['null'],
        true:[0]
    }

    const  [text,setText] = useState( [{
        ...initText
    }])
    const [idx,setIdx] = useState(0)
    const [answer,setAnswer] = useState(initText)
    
    const [louder, setLouder] = useState(true)
    const classes = useStyles();

    const getQuestion = async id => {
        let temp = await axios.get(`${url}/notes/${id}.json`)
        return temp
    }
    // setTimeout(() => {
    //     console.log('time txt')
    //     console.log(text)
    // }, 5000);
    
    useEffect(()=>{
        console.debug()
        let text 
        console.log(props.match.params.id)
        getQuestion(props.match.params.id).then( res =>{ console.log(res.data);text = res.data; setText(prev =>  JSON.parse(JSON.stringify(res.data))  ); setIdx(prev => prev+1); setLouder(false)  } )
        console.log('text []')
      

    },[]);

    useEffect(() => {
        console.log('idx')
        console.log(idx)
        console.log('text')
        console.log(text)
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


    const buttons = (
        answer.answers.map((val, idx) => (
        <Button variant="contained" color="primary" onClick = {handlerIdx(idx)}>
                {val}
            </Button>
        )
        
        )
    )

    const questionText = () =>{
        const question = answer.question
        return (question)
    }


    const louderJsx = (
        <Backdrop className={classes.backdrop} open={louder}>
            <CircularProgress color="inherit" />
        </Backdrop>
        )

    return (
        <div>
            {louderJsx}
            {!louder &&     
            <div>
                {questionText()}
                <div></div>
                {buttons}
            </div>


   
            }
            
                     
            
            
            
        </div>

    )


}