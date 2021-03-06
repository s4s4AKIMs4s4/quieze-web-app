
import Menu from '../commonComponents/menu'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import useStyles from '../cssModules/generatedLink'


export default  function Game(){
    const generatedLink  = useSelector( (state:RootState) => state.link?.link)
    const classes = useStyles();

    return (
        <>
            <Menu/>
            <div className = {classes.wrapper}>
            <Paper className ={classes.paper} >
                <div className = {classes.textAllign}> 
                    <div>Link generated!</div>
                    <Link href = {generatedLink} > {generatedLink} </Link>
                </div> 
            </Paper>
            </div>
        </>
    )
}


