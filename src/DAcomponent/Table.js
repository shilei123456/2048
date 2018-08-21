import React, { Component } from 'react';
import { Table } from 'antd';
import './Table.css';
import {Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import * as api from '../api/api';
const col={
    columns : [{
    title: '头像',
    dataIndex: 'hurl',
    key: 'hurl',
    align: 'center',
    render: text => {
    return  <div>
              <div><img src={text} alt="暂无图片" className="img-size"/></div>
            </div>}
  }, {
    title: '姓名',
    dataIndex: 'student',
    key: 'student',
    align: 'center',
    render: student=> {
    return  <div>
              <Link to={`/op/${student.mid}`}>{student.nick}</Link>
             
            </div>}
  }, {
    title: '学号',
    dataIndex: 'mid',
    key: 'mid',
    align: 'center'
  },
  {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
    align: 'center'
  },
  {
    title: '课程',
    dataIndex: 'learning_lessons',
    key: 'enterRate',
    align: 'center',
    render: text => {
            return <div>
                      <span>{text.join(' ')}</span>
                   </div>
          }
  },
  {
    title: '开课时间',
    dataIndex: 'start_time',
    key: 'start_time',
    align: 'center'
  },
  {
    title: '老师',
    dataIndex: 'teachers',
    key: 'teachers',
    align: 'center'
  }
]

}
class Tables extends Component{
     componentDidMount(){
       const {Actions}=this.props;
      Actions.fetchStudentInfo(1);
      //  const {dispatch}=this.props;
      //  api.fatchdDangAn(dispatch);
   }
    render(){
        const { DAmessage} = this.props;
      
        return(
            <div className="tab">
             <Table dataSource={DAmessage.msg} columns={col.columns} />
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {DAmessage} = state;
  return {DAmessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tables);