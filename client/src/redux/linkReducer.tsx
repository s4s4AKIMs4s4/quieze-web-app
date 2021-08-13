import {SETLINK} from './types'


const initState = {
    link:'none',
}



export const linkReducer = (state = initState, action) => {
    switch (action.type){
        case SETLINK: return {...state, link: action.payloud}
        default: return state
    }
}
