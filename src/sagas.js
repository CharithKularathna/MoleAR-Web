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
      
      const response = yield axios.post('login/',{
          username:email,
          password: password
      })
      
      console.log("Login response: ", response);
      
      if (response.token) {   
        yield put({ type: LOGIN_SUCCESS, payload: { ...response } });
      } else {
        yield put({ type: LOGIN_FAILURE, payload: { error: "Login Failed" } });
      }
    } catch (err) {
      yield put({ type: LOGIN_FAILURE, payload: { error: "Login Failed" } });
    }
    
}

function* register(action) {
    const { name, email, password } = action.payload;
    try {
      const response = yield axios.post('register/', {
          username: name,
          email: email,
          password: password
      })
      
      console.log("Register response: ", response);
      
      if (response.token) {   
        yield put({ type: REGISTER_SUCCESS, payload: { ...response } });
      } else {
        yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
      }
    } catch (err) {
      yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
    }
    
}

function* rootSaga() {
    yield takeLatest(LOGIN, login)
    yield takeLatest(REGISTER, register)
}

export default rootSaga;

