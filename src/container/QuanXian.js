import React, { Component } from 'react';
import List from '../QXcomponent/List.js';
import TabList from '../QXcomponent/Tab.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
class  QuanXian extends Component{ 
     state={
             isShow:false
     }
     onhandleShow=()=>{
        this.setState({
            isShow:!this.state.isShow,
        })
    }
    componentDidMount(){
       const {Actions}=this.props;
      Actions.fetchQuanXianInfo();
   }
    render(){    
        const { QXmessage } = this.props;
        return(
            <div style={{background:'lightblue'}}>
               <List handleShow={this.onhandleShow}/>
               <TabList isShow={this.state.isShow} QXmessage={this.props.QXmessage} handleShow={this.onhandleShow}/>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {QXmessage} = state;
  return {QXmessage};
}
const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuanXian);