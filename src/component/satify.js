import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import BUTTONLIST from './ButtonList.js';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Icon,Popover } from 'antd';
import { Link} from 'react-router';
import './Table.css';
import * as api from '../api/api';
const content = (
  <div>
    <p>小白老师<br/>班级ID：98676<br/>负责员工：小白老师/76544/89745</p>
  </div>
);
const initialMessage={
columns : [{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name',
    align: 'center'
  }, 
  {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
    align: 'center'
  },
  {
    title: '老师',
    dataIndex: 'teacher_info',
    key: 'teacher_info',
    align: 'center',
    render: text => {
    return <div>
            <Icon type="user" />
            <span>{text.nick}</span>
           </div>}
  },
  {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    align: 'center'
  },
  {
    title: '具体状态',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status',
    align: 'center',
    render: text => {
     if(text==0){
         return <div>
                  <Icon type="picture" />
                  待回复
                </div>
     }else{
         return <div>
                 <Icon type="picture" />
                  已回复
                </div>
     }
  }
  }
]
}
class Satify extends Component{
   componentDidMount(){
     const {Actions}=this.props;
     Actions.fetchSatifyInfo(1);
   }
    render(){
         const { SatifyList} = this.props;
         console.log(this.props);
        return(
            <div className="tables">
            <BUTTONLIST/>
             <div className="tanle-top">
              <h4><strong>在学课程</strong></h4>
              <Table dataSource={SatifyList.SatifyLists.list} columns={initialMessage.columns} />
             </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {SatifyList} = state;
  return {SatifyList};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Satify);