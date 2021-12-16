import {DARK_STATE,LIGTH_STATE} from './types'

const intialState = {
    isDark: false
}

export const darkReducer = (state = intialState,action) => {
    switch(action.type){
        case DARK_STATE:
            return {...state, isDark: true}
        case LIGTH_STATE:
            return {...state, isDark: false}   
        default: return state     
    }
}