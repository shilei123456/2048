import React, { Component } from 'react';
import './main.css'
import Item from './Childcomponent/Item.js'
import Border from './Childcomponent/Border.js'
import BGM from 'react-awesome-snippets-bgm';
import bgmp3 from '../source/audio/月半小夜曲.mp3';
import image from '../source/10.jpg'
import {connect} from 'react-redux'
import {  Button, Input  } from 'antd';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
 class MainComponent extends Component{ 
     //初始化 刚开始有两个带数字的小方块，每个数字对应一对(x,y)
      componentDidMount(){
       const {Actions}=this.props;
       function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
      Actions.fetchInitCureInfo(Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number(),
                                number())
    //   alert("游戏规则:当任意一个方框内出现2048或总分大于20000分即为过关")
    }
    //当是电脑操作的时候，判断是否按了上下左右键，分别触发不同的事件
    componentWillMount(){
         const {Actions}=this.props;
          function number(){           //随机产生的数字只能是2和4
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
         document.addEventListener('keydown',(e)=>{  //键盘事件
             let x=Math.floor(Math.random()*4)
             let y=Math.floor(Math.random()*4)
                switch(e.keyCode){
                    case 37:
                        Actions.fetchLeftCureInfo(x, y, number())
                        break;
                    case 38:
                        Actions.fetchUpCureInfo(x, y, number())
                        break;
                    case 39:
                        Actions.fetchRightCureInfo(x, y, number())
                        break;
                    case 40:
                   Actions.fetchDownCureInfo(x, y, number())
                        break;
                    }
            })
    }
    //当游戏失败，处理重新开始的函数
    handleRestart=()=>{
        const {Actions}=this.props;
       function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
      Actions.fetchRestartCureInfo(Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                Math.floor(Math.random()*4),
                                number(),
                                number(),0)
    }
    //手机端 点击四个按钮事件，当是电脑时，四个按钮隐藏
   handleBtn=(event)=>{
         const {Actions}=this.props;
          function number(){
                    let round = Math.ceil(Math.random()*4);
                        if(round%2==0){
                            return round;
                        }else{
                            return round=round+1;
                        }
                    }
        let v = Number(event.target.value);
        let x=Math.floor(Math.random()*4)
        let y=Math.floor(Math.random()*4)
        switch(v){
                    case 37:
                        Actions.fetchLeftCureInfo(x, y, number())
                        break;
                    case 38:
                        Actions.fetchUpCureInfo(x, y, number())
                        break;
                    case 39:
                        Actions.fetchRightCureInfo(x, y, number())
                        break;
                    case 40:
                        Actions.fetchDownCureInfo(x, y, number())
                        break;
                    }
    }
    render(){   
        const { GameMessage }= this.props
        return(
         <div className="maxbg">
         <div>
          </div>
            <div className="main">
                 <Item onhandleRestart={this.handleRestart} GameMessage={GameMessage} />
                 <Border GameMessage={GameMessage} handleRestart={this.handleRestart}/>
            </div>
            <div className="main1">
              <div className="fangxiang">
                    <Button  onClick={this.handleBtn} value="38" className="upBtn">上</Button><br />
                    <Button  onClick={this.handleBtn} value="37" className="leftBtn">左</Button>
                    <Button  onClick={this.handleBtn} value="39" className="rightBtn">右</Button><br /> 
                    <Button  onClick={this.handleBtn} value="40" className="downBtn">下</Button>
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state,ownProps){
  const {GameMessage} = state;
  return {GameMessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);