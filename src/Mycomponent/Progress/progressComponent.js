import React, { Component } from 'react';
import './progressComponent.css';
import PropTypes from 'prop-types';
export default class ProgressComponent extends Component {
    static defaultProps={
        isActive:false
    }
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'di'
        }else{
            return 'di'
        }
    }
   handleStart(e){
       
    }
    render(){
        const {value} = this.props;
        return(
            <div className="actionsheetCtn">
              <div className={this.getMaskClassName()} onTouchEnd={this.handleStart}>
                <span style={{width:`${this.props.value}`}}></span>
              </div>
            </div>
        );
    }
}
