import React, { Component } from 'react';
import Picture from './picture/picture.js';
import LeftList from './leftList/leftList.js'
import RightList from './rightList/rightList.js'
import './xueyuanList.css';
  
export default class xueyuanList extends Component {
  renderhomework=()=>{
      const {DianPing,newdata} = this.props;
      const homeworkdata=newdata.map((item,idx)=>{
        return (
              <li>
                <div className="bottom-wrap">
                  <div className="left">
                      <Picture item={item} />
                      <LeftList item={item} />
                  </div>
                  <div className="right">
                      <RightList item={item} />
                  </div>
                </div> 
              </li> 
              );
      }
      )   
      return  homeworkdata;
  }
  render() {
    return (
      <div>
        {this.renderhomework()}
      </div>
    )
    
  }
}