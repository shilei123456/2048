import React, { Component } from 'react';
import './App.css';
import { createStore,compose,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import serverApi from  './middleware/serverApi.js';
import thunk from 'redux-thunk';
// import Routes from './routes';
// import DianPing from './container/DianPing.js';
//import ZuJian from './container/ZuJian.js'     //组件一
//import Dialog from './container/Dialog.js'     //组件二
//import Progress from './container/Progress.js' //组件三
//import Switch from './container/Switch.js'       //组件五
//import QuanXian from './container/QuanXian.js'
import GameHome from './container/GameHome.js'
import rootReducer  from './reducers';
import { createLogger } from 'redux-logger';  
const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk,serverApi,logger),
  )
)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div>
          <GameHome />
         </div>
      </Provider>
    );
  }
}
