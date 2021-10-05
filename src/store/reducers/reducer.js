import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes'

const initialState = {
    token: null,
    logged_email: "",
    success: false,
    error: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                logged_email: action.payload.data.email_address,
                error: false,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: true
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: false,
                success: true
            }
            
        case REGISTER_FAILURE:
            return {
                ...state,
                error: true,
                success: false
            }
        
        default:
            return state
    }
}