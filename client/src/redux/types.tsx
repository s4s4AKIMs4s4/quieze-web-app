export const DARK_STATE = 'DARK_STATE'
export const LIGTH_STATE = 'LIGTH_STATE'
export const UPLOAD = 'UPLOAD'
export const BACK = 'BACK' 
export const UPDATE = 'UPDATE'
export const NEXT = 'NEXT'
export const SETLINK = 'SETLINK'
export const BACK_WITHOUT_UPDATE = 'BACK_WITHOUT_UPDATE'
export const SAVE = 'SAVE'
export const INIT = 'INIT'


export type textQestion = 
{
    question: string,
    answers: string[],
    true: number[],
} 

export type questionType = {
    text:Array<textQestion>,
    index: number,
    buttonString: string
}

export const initialState:questionType = {
    text:[ 
    {
        question: 'null',
        answers: [] as string[],
        true: [0],                      
    }],
    index:0,
    buttonString: "INIT",
};