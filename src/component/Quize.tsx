import React from 'react';
import Menu from './menu'
import Main from '../test'
import Forms from './textFields'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Papers from './papers'
export default function quize(){
    let Text = <TextField id="outlined-basic1" label="Enter question" />
    return (
    <div>
        
        <Menu/>
        <Papers>
            <Forms text = {Text}/>
        </Papers>
    </div>
    )
}