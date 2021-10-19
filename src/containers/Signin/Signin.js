import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { Redirect } from "react-router-dom";

import { LOGIN_FAILURE, LOGIN_SUCCESS  } from '../../store/reducers/actionTypes'

//import Input from './../../components/UI/Input/Input'
import { NavLink } from 'react-router-dom'
import { TextField } from '@material-ui/core';

import Alert from '../../components/UI/Alert/Alert';

import { getAuthToken } from '../../store/selectors/selectors';
import axios from '../../axiosAuth'

import classes from './Signin.module.css'

const Signin = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(false)

    const token = useSelector(getAuthToken)

    const dispatchSuccess = useDispatch()
    const dispatchError = useDispatch()
    

    useEffect(() => {
        if(token && token!=="") {
          console.log("Token added. And back to sign-in render...")
          //redirect = <Redirect to="/upload"></Redirect>
        }
      },[token])

    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setDisabled(false);
        }
    },[email, password])

    const signInHandler = () => {
        axios.post('login/', {
            username: email,
            password: password
        }).then(res => {
            console.log(res)
            setError(false)
            dispatchSuccess({type: LOGIN_SUCCESS, payload: {token:res.data.token, email: res.data.data.email_address}})
        }).catch(err => {
            console.log(err)
            //dispatchError({type: LOGIN_FAILURE})
            setError(true)
        })
    }
    
    let errorAlert = null;

    if (error) {
        errorAlert = (
            <Alert 
                type="Error" 
                title="Error - Check Credentials and Try Again !">
            </Alert>
        )
    }

    let inputs = (
        <>
            <TextField
                style={{width:'100%', marginBottom: '10px'}}
                variant="outlined"
                label="Username"
                type="text"
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
            }}>
                <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle}>Sign In</h1>
                <hr />
                {errorAlert}
                {inputs}
                <p>Don't have an Account?</p>
                <NavLink to="/register">Create an Account</NavLink>
                <button 
                    disabled={disabled} 
                    className="btn btn-lg btn-primary btn-block" 
                    onClick={() => signInHandler()}>
                    Sign in
                </button>
            </form>
    );

    return(
        <>
            {token ? <Redirect to="/upload" /> : null}
            <div className={classes.Signin}>
                {form}
            </div>
        </>
    )
}

export default Signin;