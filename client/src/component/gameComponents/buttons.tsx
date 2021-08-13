import useStyles from '../cssModules/game'
import Button from '@material-ui/core/Button';

export default function Buttons (props){
    const classes = useStyles();
    
    const buttons = (
        props.answer.answers.map((val, idx) => (
             <Button  className = {classes.element} variant="contained"  color="primary" onClick = {props.handlerIdx(idx)} key = {idx+Math.random()}>
                 {val}
             </Button>
         ))
     )

    return (
        <div>
            <div className = {classes.textNode} color = "primary"> 
                {props.answer.question}
            </div>
            <div className = {classes.wrapper}>
                {buttons}
            </div>
        </div>
    )    
}