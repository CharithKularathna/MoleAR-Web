import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import { LOGIN  } from '../../store/reducers/actionTypes'

//import Input from './../../components/UI/Input/Input'
import { NavLink } from 'react-router-dom'
import { TextField } from '@material-ui/core';

import { getAuthToken } from '../../store/selectors/selectors';

import classes from './Signin.module.css'

const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(true)

    const token = useSelector(getAuthToken)

    const dispatchSignin = useDispatch()

    useEffect(() => {
        if(token && token!=="") {
          console.log("Token changed or Added!")
        }
      },[token])

    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setDisabled(false);
        }
    },[email, password])
    
    let inputs = (
        <>
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
        </>
    );
    
    let form = (
            <form className="form-signin" onSubmit={e => { 
                e.preventDefault(); 
                dispatchSignin({type: LOGIN, payload: {email:email, password:password}})
            }}>
                <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle}>Sign In</h1>
                <hr />
                {inputs}
                <p>Don't have an Account?</p>
                <NavLink to="/register">Create an Account</NavLink>
                <button 
                    disabled={disabled} 
                    className="btn btn-lg btn-primary btn-block" 
                    onClick={() => dispatchSignin({type: LOGIN, payload: {email:email, password:password}})}>
                    Sign in
                </button>
            </form>
    );

    return(
        <div className={classes.Signin}>
            {form}
        </div>
    )
}

export default Signin;