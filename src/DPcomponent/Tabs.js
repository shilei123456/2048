import React, { Component } from 'react';
import { Tabs  } from 'antd';
import XueYuanList from './List/xueyuanList.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Tabs.css';
import * as actionCreators from '../actions/index';
class TabsComponent extends Component {
    componentDidMount(){   
        const { Actions } = this.props;
        const token0 = 0;
        const token1 = 1;
        const isReviewed0 = 0;
        const isReviewed1 = 1;
        Actions.fetchDianPingInfo(token1,isReviewed0);
        // Actions.fetchDianPingInfoMyHistory(token1,isReviewed1);
        // Actions.fetchDianPingInfoAllWei(token0,isReviewed0);
        // Actions.fetchDianPingInfoAllYi(token0,isReviewed1);
    }
render() {
   const { DianPing,entities} = this.props;
      let newdata = DianPing;
      if(DianPing){
          newdata = DianPing.map(id=>{
          let DianPing = entities.homeworkList[id];
          const _comments = DianPing.comments.map((item) => {
            return entities.comments[item];
           })
          return {
            ...DianPing,
            classInfo: entities.classes[DianPing.classInfo],
            author:entities.author[DianPing.author],
            comments:_comments,
            teacherInfo:entities.teacher[DianPing.teacherInfo]
          }
      });
    }
    const TabPane = Tabs.TabPane;
    return (
    <div className="tabs">
      <Tabs defaultActiveKey="1"  tabBarGutter={150}>
        <TabPane tab="我的未点评&nbsp;&nbsp;&nbsp;&nbsp;今日已点评" key="1">
          <ul>
              <XueYuanList DianPing={DianPing} newdata={newdata}/>
          </ul>
        </TabPane>
        <TabPane tab="我的点评历史&nbsp;&nbsp;&nbsp;&nbsp;累计点评" key="2">
          <ul>
              <XueYuanList DianPing={DianPing} newdata={newdata}/>
          </ul>
        </TabPane>
        <TabPane tab="全部未点评" key="3">
          <ul>
               <XueYuanList DianPing={DianPing} newdata={newdata}/>
          </ul>
        </TabPane>
        <TabPane tab="全部已点评" key="4">
          <ul>
               <XueYuanList DianPing={DianPing} newdata={newdata}/>
          </ul>
        </TabPane>
      </Tabs>   
    </div>  
    );        
    }
}


function mapStateToProps(state){
      const { DianPing,entities } = state;
      return  { DianPing,entities };
    } 
  
const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TabsComponent);
  
 



 




