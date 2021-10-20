import React from 'react'
import Alert from '../Alert/Alert'
import classes from './Success.module.css'

const success = (props) => (
    <div className={classes.Success}>
        <Alert type="Success">{props.children}</Alert>
    </div>
)

export default success;
