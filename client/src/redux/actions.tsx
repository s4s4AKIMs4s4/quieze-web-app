import {DARK_STATE,LIGTH_STATE,BACK, UPLOAD, NEXT, UPDATE, SETLINK} from './types'

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
    // payloud.buttonString = "NEXT"
    return{
        type:UPLOAD,
        payloud:payloud,
    }
}

export function setLink(payloud){
    
    return{
        type: SETLINK,
        payloud: payloud,
    }
}

export function back(){
    return {
        type:BACK,
    }
}

export function update(answers,payloud,ind,length){
    payloud =  JSON.parse(JSON.stringify(payloud))

    if(ind === length - 2){
        answers[ind + 1] = payloud
        return {
            type:NEXT,
            payloud:answers
        }
    }
    else{
        answers[ind + 1] = payloud
        return {
            type:UPDATE,
            payloud:answers
        }
    }  

    
}

