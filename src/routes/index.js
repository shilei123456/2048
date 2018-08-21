import React from 'react';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from '../container/App.js';
import Op from '../container/Op.js';
import DangAn from '../container/DangAn.js';
import ShangkeXiangqing from '../container/ShangkeXiangqing.js';

const Routes = () => {
    return (
      <Router history={browserHistory}>
       <Route path="/" component={App}>
        <IndexRoute component={DangAn} />
       </Route>
        <Route path="op/:mid" component={Op} />
        <Route path="dangan" component={DangAn} />
        <Route path="shangkexiangqing" component={ShangkeXiangqing} />  
      </Router>
    );
};

export default Routes;