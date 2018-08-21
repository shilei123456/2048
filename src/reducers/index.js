import { combineReducers } from 'redux';
import MessageList from './Message.js';
import MessageTop from './messageTop.js';
import DAmessage from './damessage.js';
import SKmessage from './skmessage.js';
import SatifyList from './satify.js';
import DianPing from './dianping.js'
import entities from './entities.js';
import QXmessage from './quanxian.js';
import GameMessage from './game.js'
export default combineReducers({
  entities,
  MessageList,
  MessageTop,
  DAmessage,
  SKmessage,
  SatifyList,
  DianPing,
  QXmessage,
  GameMessage
});

