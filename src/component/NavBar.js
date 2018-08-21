import React, { Component } from 'react';
import {Tabs} from 'antd';
import './NavBar.css';
import Tables from './Table.js';
import Satify from './satify.js'
const TabPane = Tabs.TabPane;
function callback(key) {
console.log(key);
}
export default class NavBar extends Component{
    render(){
        return(
            <div className="TabsList">
                <Tabs defaultActiveKey="1" onChange={callback} className="tab-left">
                    <TabPane tab="课程信息" key="1"><Tables/></TabPane>
                    <TabPane tab="满意度反馈" key="2"><Satify/></TabPane>
                </Tabs><hr className="xian"/>
            </div>
        );
    }
}