import React, { Component } from 'react';
import { Button } from 'antd';
import './RightList.css';

 export default class RightList extends Component{ 
    handleFindIndex1=()=>{
     const {onhandleIndex,item,index} = this.props;
     onhandleIndex && onhandleIndex(item.name,item.mid,index);
   }
    render(){   
      const {item}=this.props
        return(      
                <div className="btnList">
                  <Button onClick={this.handleFindIndex1}>{item.name} mid:{item.mid}</Button>
                </div>
        );

}
}