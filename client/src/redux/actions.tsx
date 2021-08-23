import {DARK_STATE,LIGTH_STATE,BACK, UPLOAD, NEXT, UPDATE, SETLINK, BACK_WITHOUT_UPDATE} from './types'

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

export function setLink(payloud){
    
    return{
        type: SETLINK,
        payloud: payloud,
    }
}

export function back(answers, payloud, ind){
    console.log(ind)
    console.log(answers.length)
    if(ind+1 === answers.length){
        return {
            type: BACK_WITHOUT_UPDATE,
        }
    }
    else{
        payloud =  JSON.parse(JSON.stringify(payloud))
        
        answers[ind+1] = payloud
        return {
            type: BACK,
            payloud: answers
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

