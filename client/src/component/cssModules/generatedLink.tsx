import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   paper:{
       position:'absolute',
       width:'250px',
       height:'200px',
       margin:'auto',
       textAlign:'center',
       top:'0',
       left:'0',
       bottom:'0',
       right:'0',
       fontSize:'1.4rem',

   },

   wrapper:{
        position:'relative',
        width:'100vw',
        height:'100vh'
   },
   textAllign:{
    position:'relative',
    top:'30%',

   }
}),

);

export default useStyles
