import HOCForm from './HOCForm';
import BackGroupButtons from './BackGroupButtons'






export const HOCFormBack = HOCForm(
    BackGroupButtons,
    (props) => {
      let list =  [...props.text]
      for(let i = props.text.length;i<=props.it;i++){
          list[i] = ''
      }
      return list 
    }
  )