import React, { Component } from 'react';
import SwitchComponent from '../Mycomponent/Switch/switchComponent.js';
export default class Switch extends Component {
    state={
        isActionSheetActive:false,
    }
    handleShowActionSheet=()=>{
        this.setState({
            isActionSheetActive:!this.state.isActionSheetActive,
        })
    }
    render(){
        return(
            <div>
              <SwitchComponent 
              onhandleSwitch={this.handleShowActionSheet}
               isActive={this.state.isActionSheetActive}
               />
            </div>
            
        );
    }
}