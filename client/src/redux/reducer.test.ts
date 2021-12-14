import {textReducer} from './textReducer'
import {questionType} from './types'
import { UPDATE, UPLOAD } from './types';

describe('store testing', ()=>{
    let initialState = {} as questionType

    beforeAll(()=>{
        initialState = {
            text:[ 
                {
                    question: 'null',
                    answers: ['0'],
                    true: [0],                      
                }],
                index:0,
                buttonString: "INIT",
            };
        })
        
        
        it("test UPDATE type in store" , () => {
            const testUpdate = [
                {
                    question: 'test',
                    answers: ['1','2','3'],
                    true: [1],                      
                }]
            
    
            const action = {
                payloud: testUpdate,
                type:UPDATE
            }
    
            const currentState = textReducer(initialState,action)
            expect(currentState.text).toEqual(testUpdate)
        })

        it("test UPLOAD type in store" , () => {
        const testUpdate = 
            {
                question: 'test',
                answers: ['1','2','3'],
                true: [1],                      
            }
            
        const action = {
            payloud: testUpdate,
            type:UPLOAD
        }

        const currentState = textReducer(initialState,action)
        expect(currentState.text).toEqual([...initialState.text,testUpdate])
    })


})