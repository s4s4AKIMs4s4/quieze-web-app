import {UPLOAD, BACK, UPDATE, NEXT} from './types'

let init: string[] = []

export type inside = 
{
    question: null,
    answers: string[],
    true: number[],
} 


type Person = {
    email: string;
    rating: number;
  };
  let scores: { [name: string]: Person } = {};
  scores.bill = {
    email: "bill@somewhere.com",
    rating: 9,
  };


let initialState: {text:Array<inside>,index: number,buttonString: string} = {
                                            text:[ 
                                            {
                                                question: null,
                                                answers: init,
                                                true: [0],                      
                                            }],
                                            index:0,
                                            buttonString: "INIT",
                                        };

//{ ...state.text, answers:[...state.text, action.payloud] }
// we alredy get a full complect answers so put it to next  dictionary


export const textReducer = (state = initialState,action) => {
    switch(action.type){
        case UPLOAD:
            return {...state, text:[...state.text, action.payloud],index: state.index+1,buttonString:"NEXT"  }
        case BACK:
            return {...state, index: state.index -1,buttonString:"BACK" }
        case UPDATE:
            return {...state, text:action.payloud, index: state.index + 1,buttonString:"UPDATE" }
        case NEXT:
            return {...state,text:action.payloud, index: state.index + 1, buttonString:"NEXT"}        
        default: return state     
    }
}





