import React, { Component } from 'react';
import './Cure.css';
import cureColor from '../../configColor.json';
 export default class Cure extends Component{ 
     //根据不同的值，选取不同颜色
     getCureColor=(value=0)=>{
         return {
           backgroundColor:cureColor.style[value].background,
           color:cureColor.style[value].color
         }
     }
     //方块里的数字样式
     getTextColor=(item1)=>{
         if(item1===0){
             return "text0"
         }else{
             return "text"
         }
     }
     //通关条件，方块内数字为2048或总分达到20000即为通关
      componentDidMount(){
        const {item1,handleRestart,GameMessage} = this.props
         if(item1===2048 || GameMessage.ScoreData>20000){
            alert("哈哈，我就是彩蛋。祝君通关！！！")
            handleRestart()
        }
      }
    render(){  
        const {item1,handleRestart,GameMessage} = this.props
        const style1=Object.assign(cureColor,this.getCureColor(item1))
        console.log(style1)
        const currentColor=style1.style[item1] 
            return (
                 <div style={this.getCureColor(item1)} className="cure" ><p className={this.getTextColor(item1)}>{item1}</p></div>
            )   
    }
}