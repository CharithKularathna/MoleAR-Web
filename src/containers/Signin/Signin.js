import React, { useState } from 'react'
import classes from './Signin.module.css'

import Input from './../../components/UI/Input/Input'
import { Link } from 'react-router-dom'

let inputs = (
    <>
        <Input 
            label="Email"
            type="email"
        />
        <Input 
            label="Password"
            type="password"
        />
    </>
);

let form = (
        <form className="form-signin">
            <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle}>Sign In</h1>
            <hr />
            {inputs}
            <p>Don't have an Account?</p>
            <Link to="register">Create an Account</Link>
            <button disabled={true} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
);

const signin = (props) => {
    return(
        <div className={classes.Signin}>
            {form}
        </div>
    )
}

export default signin;