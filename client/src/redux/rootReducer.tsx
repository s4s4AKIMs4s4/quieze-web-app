import {darkReducer} from './darkReducer'
import { combineReducers } from 'redux'
import {textReducer} from './textReducer'
import {linkReducer} from './linkReducer'


export const rootReducer = combineReducers({
    palet: darkReducer,
    answer: textReducer,
    link: linkReducer,
    })

export type RootState = ReturnType<typeof rootReducer>    