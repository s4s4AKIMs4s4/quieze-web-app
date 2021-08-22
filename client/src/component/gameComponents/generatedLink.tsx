
import { useTheme } from '@material-ui/core/styles';
import Menu from '../commonComponents/menu'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import useStyles from '../cssModules/generatedLink'

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

export default  function Game(){

    const generatedLink  = useSelector( (state:RootState) => state.link?.link)
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Menu/>
            <div className = {classes.wrapper}>
            <Paper className ={classes.paper} >
                <div className = {classes.textAllign}> 
                    Link generated!
                    <div></div>
                    <Link href = {generatedLink} > {generatedLink} </Link>
                </div> 
            </Paper>
            </div>
        </>
    )
}