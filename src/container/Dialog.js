import React, { Component } from 'react';
import Dialogs from '../Mycomponent/Dialog/DialogComponent.js';
export default class Dialog extends Component {
    state={
        isActionSheetActive:false,
        title:'',
        menu:[],
        type:''
    }
    handleShowActionSheet=()=>{
        this.setState({
            type:1,
            isActionSheetActive:true,
            title:'弹窗标题',
            menu:"弹窗内容，告知当前状态，信息和解决方法，描述文字尽量在三行内",
            caozuo:{
                caozuo1:"辅助操作",
                caozuo2:"主操作" 
            }
        })
    }
     handleShowActionSheet1=()=>{
        this.setState({
            type:2,
            isActionSheetActive:true,
            menu:"弹窗内容，告知当前状态，信息和解决方法，描述文字尽量在三行内",
            caozuo:{
                caozuo1:"知道了",
            }
        })
    }
    handleShowActionSheet2=()=>{
        this.setState({
            type:3,
            isActionSheetActive:true,
            title:'弹窗标题',
            menu:"弹窗内容，告知当前状态，信息和解决方法，描述文字尽量在三行内",
            caozuo:{
                caozuo1:"辅助操作",
                caozuo2:"主操作" 
            }
        })
    }
     handleShowActionSheet3=()=>{
        this.setState({
            type:4,
            isActionSheetActive:true,
            menu:"弹窗内容，告知当前状态，信息和解决方法，描述文字尽量在三行内",
            caozuo:{
                caozuo1:"辅助操作",
                caozuo2:"主操作" 
            }
        })
    }
    handleHideActionSheet=()=>{
        this.setState({
            isActionSheetActive:false
        })
    }
    render(){
        return(
            <div>
              <div onClick={this.handleShowActionSheet}>iOS ActionSheet</div><br />
              <div onClick={this.handleShowActionSheet1}>Android ActionSheet</div><br />
              <div onClick={this.handleShowActionSheet2}>iOS ActionSheet</div><br />
              <div onClick={this.handleShowActionSheet3}>Android ActionSheet</div>
              <Dialogs
               isActive={this.state.isActionSheetActive}
               title={this.state.title}
               menu={this.state.menu}
               caozuo={this.state.caozuo}
               onCancel={this.handleHideActionSheet}
               type={this.state.type}
               />
            </div>
            
        );
    }
}