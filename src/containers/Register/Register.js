import React, { useState } from 'react'
import classes from './Register.module.css'

import Input from './../../components/UI/Input/Input'
import { Link } from 'react-router-dom'

let inputs = (
    <>
        <Input 
            label="Name"
            type="text"
        />
        <Input 
            label="Email"
            type="email"
        />
        <Input 
            label="Password"
            type="password"
        />
        <Input 
            label="Confirm Password"
            type="password"
        />
    </>
);

let form = (
        <form className="form-signin" style={{color:"white"}}>
            <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle} style={{color:'black'}}>Register</h1>
            <hr />
            {inputs}
            <button disabled={true} className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
);

const signin = (props) => {
    return(
        <div className={classes.Register}>
            {form}
        </div>
    )
}

export default signin;