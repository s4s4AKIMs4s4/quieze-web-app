
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Menu from '../commonComponents/menu'

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    wrapper:{
        position:'relative',
        display: 'flex',
        width: '100%',
        height:'100px',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        top:'42vh',
        [theme.breakpoints.up('sm')]:{
            width: '60%',
            margin: 'auto'
        }
    },
    element: {
        width: '150px',
        marginRight:'10px',
        marginTop:'10px',
        [theme.breakpoints.up('sm')]:{
            width:'200px',
            height:'40px',
            marginRight:'20px',
            marginTop:'15px',
        }
        
    },

    textNode:{
        fontSize:'1.7rem',
        position:'relative',
        top:'40vh',
        margin:'0 auto',
        width:'200px',
        textAlign:'center',
    },

    wrong:{
        backgroundColor:'red',
    }


}),

);





export default  function Game(props){
    
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
    const theme = useTheme();

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
    
    const handlerIdx = (index) => (event) => {
        const trueList = answer.true.filter(val => 
            (val === index)
        );
        const node = event.currentTarget
        if(trueList.length > 0){
            // event.currentTarget.style.backgroundColor = 'blue'
            console.log("That is correct")   
        }
        else{
            console.log("Wrong answer")
            //event.target.classList.toggle('wrong')
             event.currentTarget.style.backgroundColor = 'red'
           
        }
        
        setTimeout(() =>  {
            console.log(node)
            //node.style.backgroundColor = theme.palette.primary.main
            if(idx === text.length -1)
                setIdx(idx)
            else
                setIdx(idx+1)
        }, 2000 )

    }


    const buttons = (
       answer.answers.map((val, idx) => (

            <Button  className = {classes.element} variant="contained"  color="primary" onClick = {handlerIdx(idx)} key = {idx+Math.random()}>
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
        <>
        <Menu/>
        <div>
            
            {louderJsx}
            {
                !louder &&     
                <div>
                    <div className = {classes.textNode} color = "primary"> 
                        {questionText()}
                    </div>
                    <div className = {classes.wrapper}>
                        {buttons}
                    </div>
                </div>
            }
        </div>
    </>
    )
}