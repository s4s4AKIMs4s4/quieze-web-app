import {UPLOAD, BACK, UPDATE, NEXT, BACK_WITHOUT_UPDATE, SAVE, INIT, initialState } from './types'


export const textReducer = (state = initialState,action) => {
    switch(action.type){
        case INIT:
            return {...state, ...action.payloud }
        case UPLOAD:
            return {...state, text:[...state.text, action.payloud],index: state.index+1,buttonString:"NEXT"  }
        case BACK:
            return {...state,text:action.payloud, index: state.index -1,buttonString:"BACK" }
        case BACK_WITHOUT_UPDATE:
            return {...state, index: state.index -1,buttonString:"BACK" }
        case UPDATE:
            return {...state, text:action.payloud, index: state.index + 1,buttonString:"UPDATE" }
        case SAVE:
            return {...state, text:action.payloud,buttonString:"SAVE" }    
        case NEXT:
            return {...state,text:action.payloud, index: state.index + 1, buttonString:"NEXT"}        
        default: return state     
    }
}





