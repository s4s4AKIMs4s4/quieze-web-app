
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textRoot:{
      flexGrow: 1,
      position:'relative',
      justifyContent:'flex-end',
    },
    root: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {

        margin: theme.spacing(3),
        width: '80%',
        marginTop: '40px',
        marginLeft: '10%',
        marginRight: '10%'
      


      },
    },
    cen: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {
        marginTop: '5em',
        width: '100%',
        marginLeft:'3px'
      },
    },
    question:{  
      marginTop:'5vh',
    },
    but: {
      '& > *': {
        position:'fixed',
        marginTop: '45vh',
        
      }
      
    },
  }),
);


export default useStyles