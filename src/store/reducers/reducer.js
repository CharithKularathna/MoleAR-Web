import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT,
    REINSTATE_STATE
} from './actionTypes'

const removeTokensFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
}

const persistTokens = (token, email) => {
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
}

const initialState = {
    token: null,
    logged_email: null,
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case REINSTATE_STATE:
            return {
                token: localStorage.getItem('token'),
                logged_email: localStorage.getItem('email'),
            }
        case LOGIN_SUCCESS:
            persistTokens(action.payload.token, action.payload.email)
            return {
                token: action.payload.token,
                logged_email: action.payload.email,
            }
        case LOGIN_FAILURE:
            return {
                ...state
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state
            }
            
        case REGISTER_FAILURE:
            return {
                ...state
            }
        
        case LOGOUT:
            removeTokensFromLocalStorage();
            return {
                token: null,
                logged_email: null,
            }
        
        default:
            return state
    }
}