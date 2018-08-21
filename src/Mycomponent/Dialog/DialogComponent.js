import React, { Component } from 'react';
import './Dialog.css';
export default class ZuJian extends Component {
    static defaultProps={
        isActive:true,
        title:'',
        menu:'',
        caozuo:{},
        onCancel:()=>{},
    }
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'mask hideMask'
        }else{
            return 'mask showMask'
        }
    }
    getMenuClassName =()=>{
        if(!this.props.isActive){
            return 'menu'
        }else{
            return 'menu showMenu'
        }
    }
    render(){
        const {title,menu,caozuo} = this.props;
        return(
            <div className="actionsheetCtn">
              <div className={this.getMaskClassName()} />
               <div className={this.getMenuClassName()}>
                {
                    !title.length?null:<div className="title">{title}</div>
                }
                {
                    !menu.length?null:<div className="menu-content">{menu}</div>
                }
               {
                    <div className="btn">
                        <span className="btn-caozuo" onClick={this.props.onCancel}>{caozuo.caozuo1}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="btn-caozuo zhu" onClick={this.props.onCancel}>{caozuo.caozuo2}</span>
                    </div>
                }
               </div>
            </div>
        );
    }
}