import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test:{
      position:'fixed',
      top:'85vh',
      left:'65vw',

    },
    root: {
      display: 'flex',
     
      flexWrap: 'wrap',
      '& > *': {
        
        marginTop:'12vh',
        marginLeft:'9vw',
        marginRight:'9vw',  
        margin: theme.spacing(1),
        width:'100%',
        height: theme.spacing(80),
      },
    },
  }),
);

export default useStyles