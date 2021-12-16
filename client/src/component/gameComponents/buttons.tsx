import useStyles from '../cssModules/game'
import Button from '@material-ui/core/Button';
import {EndGame} from './endGame'


export default function Buttons (props){
    const classes = useStyles();


    const produceButtons = () => {
        return (
            props.answer.answers.map((val, idx) => (
                <Button  className = {classes.element} variant="contained"  color="primary"
                 onClick = {props.handlerIdx(idx)} key = {idx+Math.random()}>
                    {val}
                </Button>
            ))
        )
    } 

    return (
        <div>
            {props.answer.answers &&
                <div className = {classes.textNode} color = "primary"> 
                    {props.answer.question}
                </div>
            }
            <div className = {classes.wrapper}>
                {( props.answer.answers) 
                    ? produceButtons()
                    : <EndGame/>
                }
            </div>
        </div>
    )    
}