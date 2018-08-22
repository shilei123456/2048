import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';
import './main.css';
import Item from './Childcomponent/Item';
import Border from './Childcomponent/Border';
import * as actionCreators from '../actions';

class MainComponent extends Component {
  // 当是电脑操作的时候，判断是否按了上下左右键，分别触发不同的事件
  componentWillMount() {
    const { Actions } = this.props;
    function number() { // 随机产生的数字只能是2和4
      const round = Math.ceil(Math.random() * 4);
      if (round % 2 == 0) {
        return round;
      }
      return round + 1;
    }
    document.addEventListener('keydown', e => { // 键盘事件
      const x = Math.floor(Math.random() * 4);
      const y = Math.floor(Math.random() * 4);
      switch (e.keyCode) {
        case 37:
          Actions.fetchLeftCureInfo(x, y, number());
          break;
        case 38:
          Actions.fetchUpCureInfo(x, y, number());
          break;
        case 39:
          Actions.fetchRightCureInfo(x, y, number());
          break;
        case 40:
          Actions.fetchDownCureInfo(x, y, number());
          break;
        default:
          break;
      }
    });
  }
  componentDidMount() { // 初始化 刚开始有两个带数字的小方块，每个数字对应一对(x,y)
    const { Actions } = this.props;
    function number() {
      const round = Math.ceil(Math.random() * 4);
      if (round % 2 == 0) {
        return round;
      }
      return round + 1;
    }
    Actions.fetchInitCureInfo(
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 4),
      number(),
      number()
    );
    alert('游戏规则:手机端可以点击下方上下左右按钮控制,控制方向。两个相邻相同的数相加或者两个相同的数中间有空格也可以相加，任意一个方块内出现2048即为通关。点击确定开始吧!!!');
  }
    // 当游戏失败，处理重新开始的函数
    handleRestart=() => {
      const { Actions } = this.props;
      function number() {
        const round = Math.ceil(Math.random() * 4);
        if (round % 2 == 0) {
          return round;
        }
        return round + 1;
      }
      Actions.fetchRestartCureInfo(
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        number(),
        number(), 0
      );
    }
    // 手机端 点击四个按钮事件，当是电脑时，四个按钮隐藏
   handleBtn=event => {
     const { Actions } = this.props;
     function number() {
       const round = Math.ceil(Math.random() * 4);
       if (round % 2 == 0) {
         return round;
       }
       return round + 1;
     }
     const v = Number(event.target.value);
     const x = Math.floor(Math.random() * 4);
     const y = Math.floor(Math.random() * 4);
     switch (v) {
       case 37:
         Actions.fetchLeftCureInfo(x, y, number());
         break;
       case 38:
         Actions.fetchUpCureInfo(x, y, number());
         break;
       case 39:
         Actions.fetchRightCureInfo(x, y, number());
         break;
       case 40:
         Actions.fetchDownCureInfo(x, y, number());
         break;
       default:
         break;
     }
   }
   render() {
     const { GameMessage } = this.props;
     return (
       <div className="maxbg">
         <div />
         <div className="main">
           <Item onhandleRestart={this.handleRestart} GameMessage={GameMessage} />
           <Border GameMessage={GameMessage} handleRestart={this.handleRestart} />
         </div>
         <div className="main1">
           <div className="fangxiang">
             <Button onClick={this.handleBtn} value="38" className="upBtn">上</Button><br />
             <Button onClick={this.handleBtn} value="37" className="leftBtn">左</Button>
             <Button onClick={this.handleBtn} value="39" className="rightBtn">右</Button><br />
             <Button onClick={this.handleBtn} value="40" className="downBtn">下</Button>
           </div>
         </div>
       </div>
     );
   }
}

function mapStateToProps(state) {
  const { GameMessage } = state;
  return { GameMessage };
}
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(actionCreators, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
