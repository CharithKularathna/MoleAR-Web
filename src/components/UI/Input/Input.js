import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

/*
const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        marginBottom: '10px'
    },
    input: {
        color: '#FDFFFC'
    },
    inputGreyText: {
        color: 'grey'
    }
}))
*/
const Input = ( props ) => {
    return (
       <TextField 
            style={{width:'100%', marginBottom: '10px'}}
            label={props.label}
            type={props.type}
            variant='outlined'
            size='small'
        />
    )

};

export default Input;