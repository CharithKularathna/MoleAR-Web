import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes'

const initialState = {
    token: null,
    is_logged_in: false,
    success: false,
    error: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                token: action.payload.token,
                is_logged_in: true,
                error: false,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: true
            }
           /* 
        case LOGIN_RESET_UI_STATE:
            return {
                ...state,
                error: false
            }
            
        case LOGOUT:
            return {
                token: null,
                is_logged_in: false,
                error: false,
                success:
            }
        */
        default:
            return state
    }
}