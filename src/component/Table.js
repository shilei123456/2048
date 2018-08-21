import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import BUTTONLIST from './ButtonList.js';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Icon,Popover } from 'antd';
import { Link} from 'react-router';
import './satify.css';
import * as api from '../api/api';
const content = (
  <div>
    <p>小白老师<br/>班级ID：98676<br/>负责员工：小白老师/76544/89745</p>
  </div>
);
const initialMessage={
columns : [{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',
    align: 'center',
    render: text => {
    return <div>
            <Icon type="exclamation-circle" />
            <span>{text.name}</span>
            <Link to="/shangkexiangqing">{text.name}</Link>
           </div>}
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
    align: 'center'
  },
  {
    title: '老师',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    align: 'center',
    render: text => {
    return  <div>
              <Popover content={content}>
                 <Icon type="user" />
              </Popover>
              <span>{text.nick}</span>
            </div>}
  },
  {
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    align: 'center'
  },
  {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
      return <span>{text}</span>
      }
      }
  },
  {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
        return <span>{text}</span>
      }
      }
  },
  {
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    align: 'center'
  },
  {
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    align: 'center',
    render:text=>{
      let num=parseInt(text, 10);
      if(num<80){
        return <span className="Red">{text}</span>
      }else if(num>95){
        return <span className="Orange">{text}</span>
      }else{
        return <span>{text}</span>
      }
      }
  },
]
}
class Tables extends Component{
   componentDidMount(){
     const {Actions}=this.props;
     Actions.fetchLessonInfo(330900002);
    //  Actions.fetchUserInfo(1);
    //  Actions.fetchStudentInfo(2);
      //  const {dispatch}=this.props;
      //  api.fatchLesson(dispatch);
   }
    render(){
         const { MessageList} = this.props;
        return(
            <div className="tables">
            <BUTTONLIST/>
             <div className="tanle-top">
              <h4><strong>在学课程</strong></h4>
              <Table dataSource={MessageList.LessonsList} columns={initialMessage.columns} />
             </div>
             <div className="tanle-top">
              <h4><strong>历史数据</strong></h4>
              <Table dataSource={MessageList.historyLessonsList} columns={initialMessage.columns} />
             </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {MessageList} = state;
  return {MessageList};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tables);