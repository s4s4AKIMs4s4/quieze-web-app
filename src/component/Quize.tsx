import React from 'react';
import Menu from './menu'
import Main from '../test'
import Forms from './textFields'
import Paper from '@material-ui/core/Paper';
import Papers from './papers'
export default function quize(){
    return (
    <div>
        
        <Menu/>
        <Papers>
            <Forms/>
        </Papers>
    </div>
    )
}