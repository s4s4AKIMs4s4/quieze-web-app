import {checkMap} from './builderComponents/nextTextFields'

export const getCorrectAnswersMap = (indexOfCorrectAnswers: Array<number>, allQuestions: string[]) => {
    let correctAnswers = {}

    allQuestions.forEach((val,index) => correctAnswers[index] = false  )

    indexOfCorrectAnswers.forEach((val) =>{ 
        correctAnswers[val] = true
    })
    
    correctAnswers[allQuestions.length] = false
    return correctAnswers

}


export const giveCorrectList = (check:checkMap, length: number)=>{
    let correct: number[] = [] 
    for(let it  = 0 ; it<length; it++){
      if(check[it])
      correct.push(it)  
    }
    return correct
  }