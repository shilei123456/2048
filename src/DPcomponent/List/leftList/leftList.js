import React, { Component } from 'react';
import { Switch } from 'antd';
import './leftList.css';

export default class LeftList extends Component {
  render() {
    const {item} = this.props;
    const date=new Date(1533362538734).toLocaleDateString();
    return (
      <div className="LeftList">
        <div>
         <span>作业号：{item.author.mid}</span>
        </div>
        <div>
          <span>作业：{item.description}</span> 
            <p>
              <span>学生id：{item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>班级老师: {item.classInfo.name}|{item.commentator}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>点评人：{item.teacherInfo.nick}</span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <span>提交时间：{date}</span>
            </p>
        </div>
        <div>
          佳作:<Switch Checked />
        </div>
      </div>
      );
  }
}


