import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    wrapper:{
        position:'relative',
        display: 'flex',
        width: '100%',
        height:'100px',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        top:'42vh',
        [theme.breakpoints.up('sm')]:{
            width: '60%',
            margin: 'auto'
        }
    },
    element: {
        width: '150px',
        marginRight:'10px',
        marginTop:'10px',
        [theme.breakpoints.up('sm')]:{
            width:'200px',
            height:'40px',
            marginRight:'20px',
            marginTop:'15px',
        }
        
    },

    textNode:{
        fontSize:'1.7rem',
        position:'relative',
        top:'40vh',
        margin:'0 auto',
        width:'200px',
        textAlign:'center',
    },

    wrong:{
        backgroundColor:'red',
    }


}),

);

export default useStyles