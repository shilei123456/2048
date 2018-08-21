import React, { Component } from 'react';
import TanChuang from '../Mycomponent/TanChuang.js';
export default class ZuJian extends Component {
    state={
        isActionSheetActive:false,
        title:'',
        menu:[],
        type:''
    }
    handleShowActionSheet=()=>{
        this.setState({
            isActionSheetActive:true,
            title:'iOS ActionSheet',
            menu:[{
                title:'实例菜单一',
                click:()=>console.log('实例菜单一')
            },{
                title:'实例菜单二',
                click:()=>console.log('实例菜单二')
            }],
            type:'iOS'
        })
    }
     handleShowActionSheet1=()=>{
        this.setState({
            isActionSheetActive:true,
            title:'Android ActionSheet',
            menu:[{
                title:'实例菜单一',
                click:()=>console.log('实例菜单一')
            },{
                title:'实例菜单二',
                click:()=>console.log('实例菜单二')
            }],
            type:"Android"
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
              <div onClick={this.handleShowActionSheet1}>Android ActionSheet</div>
              <TanChuang 
               isActive={this.state.isActionSheetActive}
               title={this.state.title}
               menu={this.state.menu}
               onCancel={this.handleHideActionSheet}
               type={this.state.type}
               />
            </div>
            
        );
    }
}