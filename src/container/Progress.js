import React, { Component } from 'react';
import ProgressComponent from '../Mycomponent/Progress/progressComponent.js';
export default class ZuJian extends Component {
    state={
        isActionSheetActive:false,
        defaultValue:'80%'
    }
    handleShowActionSheet=()=>{
        this.setState({
            isActionSheetActive:true,
        })
    }
    render(){
        return(
            <div>
              <div onClick={this.handleShowActionSheet}>上传</div><br />
              <ProgressComponent 
               isActive={this.state.isActionSheetActive}
               value={this.state.defaultValue}
               />
            </div>
            
        );
    }
}