import Menu from '../commonComponents/menu'
import NextTextFields from './nextTextFields'
import Papers from './paper'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import BackTextFields from './backTextFields'
import {textQestion} from '../../redux/types'
import {getCorrectAnswersMap} from '../pureFunctionsForComponents'
import BackDrop from '../commonComponents/backDrop'

export type correctAnswersMap = {[index: number]: boolean}

export default function Quize(){
    let allQuestions: Array<textQestion> = useSelector( (state:RootState) => state.answer.text)
    let currentQuestion: number = useSelector( (state:RootState) => state.answer.index) + 1
    let pressedButton: string = useSelector( (state:RootState) => state.answer.buttonString)
    

    function pickPageForRendor() {
        if (pressedButton === "BACK" || pressedButton === "UPDATE" ){ 
            const correctAnswers:correctAnswersMap = getCorrectAnswersMap(allQuestions[currentQuestion].true, allQuestions[currentQuestion].answers  )
            
            return (<BackTextFields text = {allQuestions[currentQuestion].answers} 
                obj = {allQuestions[currentQuestion]} 
                correct = {correctAnswers}/>)
        }
        else if(pressedButton === "SAVE")
            return <BackDrop louder = {true}  />
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