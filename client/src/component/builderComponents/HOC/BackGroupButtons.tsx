import React  from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { back, update} from '../../../redux/actions'

import { useHistory } from 'react-router-dom';
import useStyles from '../../cssModules/nextButtons';


function Buttons(props) {
  const classes = useStyles();   
  //const text  = useSelector( (state:RootState) => state.answer.text)
  //const index: number = useSelector( (state:RootState) => state.answer.index)
  //const [louder, setLouder] = useState(false)
  const length = props.text.length  

  const dispatch = useDispatch()
  const history = useHistory();

  const handlerNextClick = () => {
    dispatch(update(props.text, props.currentTextState, props.index,length));
  }

  const handlerBack = () =>{
    if(props.index !== 0){
      dispatch(back(props.text, props.currentTextState, props.index))
    }
  }


  return(
    <div>
    
    <form className={classes.test} noValidate autoComplete="off">
              <div className={classes.middle}>
                  <Button  onClick = {handlerBack}> Back</Button>
                  <Button  onClick = {handlerNextClick}>Next</Button>  
                  <Button  onClick={props.handleSaveClick}>  
                    Save
                  </Button>        
              </div>
            </form>

  </div>  
      
  );
}
export default React.memo(Buttons)