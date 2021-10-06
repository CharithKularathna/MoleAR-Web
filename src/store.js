//import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga'

import { reducer } from './store/reducers/reducer'
//import rootSaga from './sagas'

//const sagaMiddleware = createSagaMiddleware()

//export const store = createStore(reducer,applyMiddleware(sagaMiddleware))

//sagaMiddleware.run(rootSaga)
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({  reducer: reducer })