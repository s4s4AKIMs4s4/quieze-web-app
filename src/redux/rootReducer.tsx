import {darkReducer} from './darkReducer'
import { combineReducers } from 'redux'




export const rootReducer = combineReducers({
    palet:darkReducer,
    })

export type RootState = ReturnType<typeof rootReducer>    