import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../cssModules/BackDrop';

interface Ilouder{
    louder: boolean
}

 export default function BackDrop(props: Ilouder) {
    const classes = useStyles();
     return  (
        <Backdrop className={classes.backdrop} open={props.louder}>
            <CircularProgress color="inherit" />
        </Backdrop>
        )

 }