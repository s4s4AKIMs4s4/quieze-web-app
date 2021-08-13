import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test:{
      
      // marginLeft:'auto',
      // marginRight:'auto',
      position:"absolute",
      top:"90%",
      right:"5px"
    },
    middle:{

      // margin: '0 auto 0',
      // width:'200px',
      // height:'200px', 
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    
    })
)
export default useStyles