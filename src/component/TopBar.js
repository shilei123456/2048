import React, { Component } from 'react';
import { Avatar } from 'antd';
import { Input,Icon } from 'antd';
import {Button} from 'antd';
import { connect } from 'react-redux';
import './TopBar.css';
import * as api from '../api/api';
class TopBar extends Component{
    componentDidMount(){
       const {dispatch}=this.props;
       api.fatchUser(dispatch);
   }
    render(){
          const { MessageTop} = this.props;
          console.log(MessageTop.msg);
        return(
            <div>
              <div className="TouXiang">
                <Avatar shape="square" className="Tou" src={MessageTop.msg.hurl} />
              </div>
              <div className="message">
                <div className="message-left">
                    <p>{MessageTop.msg.nick}</p>
                    <p>学员编号 : {MessageTop.msg.mid}</p>
                    <p>在学课程 : {MessageTop.msg.learningLesson}</p>
                    <p>入学时间 : {MessageTop.msg.enterDate}</p>
                </div>
                <div className="message-mid">
                    <p>历史付费额 : {MessageTop.msg.history_pay}</p>
                    <p>累计学习天数 : {MessageTop.msg.totalLearningDays}</p>
                    <p>最后登录时间 : {MessageTop.msg.lastLoginDate}</p>
                </div>
                <div className="message-right">
                    <p>手机号码 :  {MessageTop.msg.tel}<Icon type="file-text" className="icon"/></p>
                    <p>微信号码 : {MessageTop.msg.weiChatCode}<Input placeholder="xiaoniangao" className="inp"/><Button className="tj1">提交</Button></p>
                    <p>备注 : <Input placeholder="xiaoniangao" className="inp"/><Button  className="tj2">提交</Button></p>
                </div>
              </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {MessageList,MessageListxia,MessageTop} = state;
  return {MessageList,MessageListxia,MessageTop};
}
export default connect(mapStateToProps)(TopBar);