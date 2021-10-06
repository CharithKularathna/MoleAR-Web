import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'

import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../../store/reducers/actionTypes'
//import Input from './../../components/UI/Input/Input'
import { Redirect } from 'react-router-dom'
import { TextField } from '@material-ui/core'

import { getAuthToken } from '../../store/selectors/selectors';
import { isEqual, isFormFilled } from '../../utility';
import axios from '../../axiosAuth';

import classes from './Register.module.css'

const Register = (props) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [disabled, setDisabled] = useState(true)

    const token = useSelector(getAuthToken)

    const dispatchSuccessReg = useDispatch()
    const dispatchErrorReg = useDispatch()

    useEffect(() => {
        if (isFormFilled([name, password, email, confirmPassword]) && isEqual(password,confirmPassword)) {
            setDisabled(false)
        }
    },[name, email, password, confirmPassword])

    const registerHandler = () => {
        axios.post('register/', {
            username: name,
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            dispatchSuccessReg({type: REGISTER_SUCCESS})
        }).catch(err => {
            console.log(err)
            dispatchErrorReg({type: REGISTER_FAILURE})
        })
    }

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
            <form className="form-signin" style={{color:"white"}} onSubmit={e => { 
                e.preventDefault(); 
            }}>
                <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle} style={{color:'black'}}>Register</h1>
                <hr />
                {inputs}
                <button 
                    disabled={disabled} 
                    className="btn btn-lg btn-primary btn-block"
                    onClick={() => registerHandler()}>
                    Register
                </button>
            </form>
    );
    
    return(
        <>
            {token ? <Redirect to="/upload" /> : null}
            <div className={classes.Register}>
                {form}
            </div>
        </>
    )
}

export default Register;