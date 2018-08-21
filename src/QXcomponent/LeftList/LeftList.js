import React, { Component } from 'react';
import { Button } from 'antd';
import './LeftList.css';
 export default class LeftList extends Component{ 
     handleFindIndex2=()=>{
     const {onhandleIndex,item,index} = this.props;
     onhandleIndex && onhandleIndex(item.name,item.mid,index);
   }
    render(){   
        const {item} = this.props;
        return(        
                <div className="btnList">
                  <Button onClick={this.handleFindIndex2}>{item.name} mid:{item.mid}</Button>
                </div>
        );
       
    }
}