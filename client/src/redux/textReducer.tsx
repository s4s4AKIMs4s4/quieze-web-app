import {UPLOAD, BACK, UPDATE, NEXT, BACK_WITHOUT_UPDATE} from './types'

let init: string[] = []

export type textQestion = 
{
    question: string,
    answers: string[],
    true: number[],
} 

export type questionType = {
    text:Array<textQestion>,
    index: number,
    buttonString: string
}

let initialState:questionType = {
                                    text:[ 
                                    {
                                        question: 'null',
                                        answers: init,
                                        true: [0],                      
                                    }],
                                    index:0,
                                    buttonString: "INIT",
                                };

export const textReducer = (state = initialState,action) => {
    switch(action.type){
        case UPLOAD:
            return {...state, text:[...state.text, action.payloud],index: state.index+1,buttonString:"NEXT"  }
        case BACK:
            return {...state,text:action.payloud, index: state.index -1,buttonString:"BACK" }
        case BACK_WITHOUT_UPDATE:
            return {...state, index: state.index -1,buttonString:"BACK" }
        case UPDATE:
            return {...state, text:action.payloud, index: state.index + 1,buttonString:"UPDATE" }
        case NEXT:
            return {...state,text:action.payloud, index: state.index + 1, buttonString:"NEXT"}        
        default: return state     
    }
}





