import React, { Component } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';
import * as api from '../api/api';
class Tables extends Component{
     componentDidMount(){
       const {dispatch}=this.props;
       api.fatchdShangke(dispatch);
   }
    render(){
        const {SKmessage,SKmessageTOP} = this.props;
        return(
            <div className="nav">
              <p>班级:班级ID:老师:负责员工:</p>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const { SKmessage,SKmessageTOP} = state;
  return { SKmessage,SKmessageTOP};
}

export default connect(mapStateToProps)(Tables);