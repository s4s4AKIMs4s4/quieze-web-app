import {darkReducer} from './darkReducer'
import { combineReducers } from 'redux'
import {textReducer} from './textReducer'



export const rootReducer = combineReducers({
    palet:darkReducer,
    answer:textReducer,
    })

export type RootState = ReturnType<typeof rootReducer>    