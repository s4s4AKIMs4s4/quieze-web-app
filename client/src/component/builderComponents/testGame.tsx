
import Menu from '../commonComponents/menu'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';

const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

export default  function TestGame(props){


    const getQuestion = async id => {
        let temp = await axios.get(`${url}/notes/${id}.json`)
        return temp
    }


    useEffect(()=>{
        
        
    },[]);










   



    return (
        <div>
            <h2>insiders</h2>
        </div>

    )


}