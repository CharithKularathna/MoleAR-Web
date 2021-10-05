import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from './axiosAuth'
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, 
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, 
  }
from './store/reducers/actionTypes'

import { store } from './store'

function* login(action) {
    const { email, password } = action.payload;
    try {
      /*
      const response = yield axios.post('login',{
          email:email,
          password: password
      })
      */
      const response = yield axios.get('/')
      console.log("Login response: ", response);
      
      if (response.token) {   
        //yield put({ type: LOGIN_SUCCESS, payload: { ...response } });
      } else {
        //yield put({ type: LOGIN_FAILURE, payload: { ...response } });
      }
    } catch (err) {
      //yield put({ type: LOGIN_FAILURE, payload: { error: err } });
    }
    
}

function* rootSaga() {
    yield takeLatest(LOGIN, login)
    //yield takeEvery(REGISTER, register)
}

export default rootSaga;

