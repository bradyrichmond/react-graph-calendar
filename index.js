import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import { Provider } from 'react-redux';