import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const alert = (props) => {
    
    let type = null
    if (props.type == "Success"){
        type = "success"
    }
    else {
        type = "error"
    }
    return(
        <div style={{width:'100%', marginBottom:'10px'}}>
            <Alert severity={type}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </div>
    )
}

export default alert;