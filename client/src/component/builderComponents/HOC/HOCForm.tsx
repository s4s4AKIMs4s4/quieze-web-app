import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../../cssModules/backTextFields';
import {checkMap, initCurrentQuestionType} from '../nextTextFields'
import { useDispatch,useSelector } from 'react-redux';
import { setLink,  save} from '../../../redux/actions'
import { RootState } from '../../../redux/rootReducer';
import { useState } from 'react';
import BackDrop from '../../commonComponents/backDrop'
import {apiFireBase} from '../abstaraction/webAbstraction'
import { useHistory } from 'react-router-dom';


interface IHOCForm{
  textHandler: Function,
  it: number,
  updatePage?: () => void,
  correctAnswers: checkMap,
  checkHandler:Function,
  text?: string[],
  hadleLastField: Function,
  currentTextState:initCurrentQuestionType,
  answers?:string[]
}


export default function HOCForm(Buttons ,getList:Function){
    return function HH(props: IHOCForm){
      const text  = useSelector( (state:RootState) => state.answer.text)
      const index: number = useSelector( (state:RootState) => state.answer.index)
      const [louder, setLouder] = useState(false)
      const length = text.length  
      const dispatch = useDispatch()
      const history = useHistory();

      const classes = useStyles();

        let textFieldJsx = (val, idx) => {
            return (
            <>
              <FormControlLabel
                    control={<Checkbox  checked={props.correctAnswers[idx]} onChange = {props.checkHandler(idx)} name="gilad" />}
                label="Correct answer"
              />
      
              {(idx === props.it)
                ?<TextField value = {val} className = "text" onChange={props.textHandler(idx)} onClick = {props.hadleLastField(idx)}/> 
                :<TextField  value= {val}  onChange={props.textHandler(idx)} className = "text"  />
                }
            </>
            )    
        }

        const listTextFields = getList(props)?.map((val, idx) =>
        (
          <Grid item xs={6} sm={3} key = {idx}>        
            {textFieldJsx(val,idx)}   
          </Grid>)
        )


        const handleSaveClick = async () => { 
          
          const firebase: apiFireBase = new apiFireBase()    
          await dispatch(save(text,props.currentTextState,index,length));
          const res = await firebase?.sendPost('notes.json', text) 
          const link  = `${firebase?.domen}/gameNotes/${res?.data.name}`
          dispatch(setLink(link))
          console.log(link)
          
          history.push('/game');
      
        }
    
        return (
            <div>
            {
          (!louder)
          ? <div> 
              <form  className={classes.cen} noValidate autoComplete="off">
                <div className={classes.textRoot}>
                  <Grid container spacing={5}>
                    {listTextFields}
                  </Grid>
                </div>
                
              </form>
              <Buttons currentTextState = {  props.currentTextState}
               updatePage = {props.updatePage}
               handleSaveClick = {handleSaveClick}
               text = {text}
               index = {index}
               
              
              />
            </div>
          : <BackDrop louder = {louder}  />
          }
          </div>
        )
    }
}

