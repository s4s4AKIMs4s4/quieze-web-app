import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

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
    end:{
        position: 'absolute',
        display: 'flex',
        flexFlow:' column nowrap',
        justifyContent:'center',
        alignItems:'center'
    },
    end__image:{
        width: '50%',
        [theme.breakpoints.down('sm')]:{
            width: '80%',
        }
    },
    end__titleWrapper:{
        
    },
    end__title:{
        marginTop: '0px',
        marginBottom: '20px',
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