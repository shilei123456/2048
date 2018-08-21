import React, { Component } from 'react';
import { Table,Icon } from 'antd';
import './Table.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as api from '../api/api';
const initialMessage={
columns : [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',
    align: 'center'
  }, {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
    align: 'center'
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '作业提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else if(text==1){
        return <div><strong><Icon type="check"/></strong></div>
      }else{
         return <div><strong><Icon type="minus"/></strong></div>
      }
    }
  },
  {
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key: 'clockin_status',
    align: 'center',
    render:text=>{
      if(text==0){
        return <div><strong><Icon type="close"/></strong></div>
      }else{
        return <div><strong><Icon type="check"/></strong></div>
      }
    }
  },
  {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    align: 'center',
    render:text=>{
      if(text<5){
        return <div className="red"><strong>{text}</strong></div>
      }else{
        return <div>{text}</div>
      }
    }
  }
]
}
class Tables extends Component{
     componentDidMount(){
       const {Actions}=this.props;
      Actions.fetchLearnInfo(98676);
      //  const {dispatch}=this.props;
      //  api.fatchdShangke(dispatch);
   }
    render(){
        const {SKmessage} = this.props;
        return(
            <div className="tab">
             <p><strong>班级:{SKmessage.top.name}&nbsp;&nbsp;&nbsp;班级ID:{SKmessage.top.id}&nbsp;&nbsp;&nbsp;老师:白帆/98676/fgg&nbsp;&nbsp;&nbsp;负责员工:小白老师/76544/9667554</strong></p>
             <Table dataSource={SKmessage.msg} columns={initialMessage.columns} />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const { SKmessage} = state;
  return { SKmessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tables);