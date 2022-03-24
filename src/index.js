import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import {createStore} from 'redux'



let defaultState = [
  {id: 0, name: '신발1', quan: 2},
  {id: 1, name: '신발2', quan: 1}
]


function reducer(state = defaultState, action) {
  if( action.type === 'increment') {

    // redux is immutable so should be copy
    let copy = [...state]
    
    // increment 1
    copy[action.id].quan++
    return copy
  } else if( action.type === 'decrement') {
    
    let copy = [...state]

    copy[action.id].quan--
    return copy
  } else {
    return state
  }
  
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
