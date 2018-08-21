import axios from 'axios';
const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';
const callServerApi = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).then(res => {
      if (res.data.ret === 1) {
        return resolve(res);
      }
      return reject({ errMsg: res.data.errMsg });
    }).catch(err => {
      return reject({ errMsg: JSON.stringify(err) });
    });
  });
}

export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params
  } = action.SERVER_API;

  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }
const { normailzerFun } = action.SERVER_API;
  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction.SERVER_API;
    return finalAction;
  }
  next({
    type: `${type}_REQ`
  });

  return callServerApi(endpoint, params)
    .then(res => {
   const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data) : res.data;
      next({
        type: `${type}_SUC`,
        response:response
      });
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        errMsg: err.errMsg
      });
    });
};
