import React, { Component } from 'react';
import './switchComponent.css';
export default class switchComponent extends Component {
    static defaultProps={
        isActive:false,
    } 
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'mask showMask'
        }else{
            return 'mask hideMask'
        }
    }
    getActionsheetCtn = ()=>{
        if(!this.props.isActive){
            return 'actionsheetCtn'
        }else{
            return 'actionsheetCtn1'
        }
    }
    render(){
         const {isActive}=this.props;
        return(
            <div className={this.getActionsheetCtn()} onClick={this.props.onhandleSwitch}>
              <div className={this.getMaskClassName()} ></div>
            </div>
        );
    }
}