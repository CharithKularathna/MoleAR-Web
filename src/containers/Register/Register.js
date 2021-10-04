import React, { useState, useEffect } from 'react'
import classes from './Register.module.css'

//import Input from './../../components/UI/Input/Input'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'

import { isEqual, isFormFilled } from '../../utility'

const Register = (props) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (isFormFilled([name, password, email, confirmPassword]) && isEqual(password,confirmPassword)) {
            setDisabled(false)
        }
    },[name, email, password, confirmPassword])

    let inputs = (
        <>
            <TextField
                style={{width:'100%', marginBottom: '10px'}}
                variant="outlined"
                label="Name"
                type="text"
                value={name}
                onChange={(e) =>  setName(e.target.value) }
                required
            />
            <TextField
                style={{width:'100%', marginBottom: '10px'}}
                variant="outlined"
                label="Email"
                type="email"
                value={email}
                onChange={(e) =>  setEmail(e.target.value) }
                required
            />
            <TextField
                style={{width:'100%', marginBottom: '10px'}}
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) =>  setPassword(e.target.value) }
                required
            />
            <TextField
                style={{width:'100%', marginBottom: '10px'}}
                variant="outlined"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) =>  setConfirmPassword(e.target.value) }
                required
            />
            
        </>
    );
    
    let form = (
            <form className="form-signin" style={{color:"white"}}>
                <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle} style={{color:'black'}}>Register</h1>
                <hr />
                {inputs}
                <button disabled={disabled} className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
    );
    
    return(
        <div className={classes.Register}>
            {form}
        </div>
    )
}

export default Register;