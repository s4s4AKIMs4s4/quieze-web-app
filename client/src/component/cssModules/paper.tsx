import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // test:{
    //   position:'fixed',
    //   top:'100vh',
    //   left:'100vw',

    // },
    root: {
      position: 'relative',
     
     
      '& > *': {
        position: 'relative',
        // marginTop:'12vh',
        // marginLeft:'9vw',
        // marginRight:'9vw',  
        // margin: theme.spacing(1),
        
        left:"17.5vw",
        top:"7vw",
        width:'65vw',
        height: '80vh',

        [theme.breakpoints.down('sm')]:{
          left:"19.5vw",
          top:"12vw",
          width:'65vw',
          height: '80vh',
        },

        [theme.breakpoints.down('xs')]:{
          left:"7vw",
          top:"20vw",
          width:'85vw',
        }

      },



    },
  }),
);

export default useStyles