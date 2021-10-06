import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from './actionTypes'

const initialState = {
    token: null,
    logged_email: null,
    logSuccess: false,
    logError: false,
    registerSuccess: false,
    registerError: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                logged_email: action.payload.email,
                logError: false,
                logSuccess: true,
                registerSuccess: false,
                registerError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logError: true,
                logSuccess: false,
                registerSuccess: false,
                registerError: false
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                logError: false,
                logSuccess: false,
                registerSuccess: true,
                registerError: false
            }
            
        case REGISTER_FAILURE:
            return {
                ...state,
                logError: false,
                logSuccess: false,
                registerSuccess: false,
                registerError: true
            }
        
        case LOGOUT:
            return {
                token: null,
                logged_email: null,
                logError: false,
                logSuccess: false,
                registerSuccess: false,
                registerError: false
            }
        
        default:
            return state
    }
}