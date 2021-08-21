 import HOCForm from "../HOCForm" 
 import FormNext from '../FormNext';
 import nextGruopButtons from './nextGruopButtons'
  
  const checkfornumber = (values, index) => {
    if(values.length === 0)
        return false
    const res = values.filter(
        (val,ind) => (val !== '' && ind === index ) 
     )
    if(res.length>0){
        return true
    }
}

  export const HOCFormNext = HOCForm(
    nextGruopButtons,
    (props) => {
      let list = new Array(props.it)
      for(let i = 0 ;i<=props.it;i++){
          if( checkfornumber(props.answers,i) )
              list[i] = props.answers[i]
          else
              list[i] = ' '
      }
      return list
    }
  )