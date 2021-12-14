import { initialState } from './types'
import {DARK_STATE,LIGTH_STATE,BACK, UPLOAD, NEXT, UPDATE, SETLINK, BACK_WITHOUT_UPDATE, SAVE, INIT} from './types'

export function showDark(){
    return {
        type:DARK_STATE
    }
}

export function showLite(){
    return {
        type:LIGTH_STATE
    }
}

export function uploand(payloud){
    payloud =  JSON.parse(JSON.stringify(payloud))
    return{
        type:UPLOAD,
        payloud:payloud,
    }
}

export function reset(){
    return{
        type:INIT,
        payloud:initialState,
    }
}

export function setLink(payloud){
    
    return{
        type: SETLINK,
        payloud: payloud,
    }
}

export function back(answers, payloud, ind){
    
    if(ind+1 !== answers.length || answers.length === 2){
        
        
        payloud =  JSON.parse(JSON.stringify(payloud))
        
        answers[ind+1] = payloud
        return {
            type: BACK,
            payloud: answers
        }
    }
    else{
        return {
            type: BACK_WITHOUT_UPDATE,
        }
    }

}

export function update(answers,payloud,ind,length){
    payloud =  JSON.parse(JSON.stringify(payloud))
    answers[ind + 1] = payloud
    
    if(ind === length - 2){    
        return {
            type:NEXT,
            payloud:answers
        }
    }
    else{
        return {
            type:UPDATE,
            payloud:answers
        }
    }  

    
}

export function save(answers,payloud,ind,length){
    payloud =  JSON.parse(JSON.stringify(payloud))
    answers[ind + 1] = payloud
    if(ind === length - 2){    
        return {
            type:SAVE,
            payloud:answers
        }
    }
    else{
        return {
            type:SAVE,
            payloud:answers
        }
    }  

    
}


