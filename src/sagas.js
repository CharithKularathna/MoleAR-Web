import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from './axiosAuth'
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, 
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, 
    UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAILURE, 
  }
from './store/reducers/actionTypes'

import { store } from './store'
import { api, setToken } from './api'

function* login(action) {
    const { email, password } = action.payload;
    try {
      
      const response = yield api('POST',"login/",'','',{
        username: email,
        password: password
      });
      
      console.log("Login response: ", response);
      setToken(response.token)
      if (response.token) {
        yield put({ type: LOGIN_SUCCESS, payload: { ...response } });
      } else {
        yield put({ type: LOGIN_FAILURE, payload: { error: "Login Failed" } });
      }
    } catch (err) {
      console.log("Within login fail..")
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
      },{headers: {
        Authorization: 'token 3ba66d9d73feb0fcd4a2eca153d4df7520dfde78'
      }})
      
      console.log("Register response: ", response);
      
      if (response) {   
        yield put({ type: REGISTER_SUCCESS, payload: { ...response } });
      } else {
        yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
      }
    } catch (err) {
      yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
    }
    
}

function* upload(action) {
  const { image, object_3D, mtl } = action.payload;
  try {
    const fd = new FormData()
    fd.append('image', image, image.name)
    fd.append('object_3D', object_3D, object_3D.name)
    fd.append('mtl', mtl, mtl.name)
    const response = yield axios.post('upload-image/', fd)
    
    console.log("Upload response: ", response);
    
    if (response) {
      console.log("Upload Success")
      //yield put({ type: REGISTER_SUCCESS, payload: { ...response } });
    } else {
      console.log("Upload Error")
      //yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
    }
  } catch (err) {
    console.log("Upload Error")
    //yield put({ type: REGISTER_FAILURE, payload: { error: "Register Failed" } });
  }
  
}


function* rootSaga() {
    yield takeLatest(LOGIN, login)
    yield takeEvery(REGISTER, register)
    yield takeEvery(UPLOAD, upload)
}

export default rootSaga;

