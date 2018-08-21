import React, { Component } from 'react';
import './rightList.css'
import handleChangeTuiHui from '../../../actions/index.js'
export default class rightList extends Component {
handleTuiHui = (id) =>{
  handleChangeTuiHui(id);
}

renderRightList = () => {
      const { item } = this.props;
      const rightList = item.comments.map((value) => {
        if(value.from == "author"){
          return <li>
                    <div className="content"> 
                      <span>{ value.nick }mid:{ value.id }</span>
                      <span>{ value.time }</span>
                    </div>
                      <span>{ value.content }</span>
                 </li>
               }
        else if(value.from == "teacher"){
        if(value.status == "reject") {
            return  <li>
                        <div className="content">
                          <span>{ value.nick }( { value.commentator.role } { value.commentator.nick } ):</span>
                          <span>{ value.time }</span>
                        </div>
                        <span>{ value.content}</span><br />
                        <span className="red">( 消息被退回，退回原因:{value.reason} )</span>
                    </li>
          }
          else if(value.status == 'unrevised') {
            return  <li>
                        <div className="content">
                          <span>{ value.nick }( {value.commentator.role}{value.commentator.nick}):</span>
                          <span className="red" onClick={() => this.handleTuiHui(value.id)}>退回</span>
                        </div>
                        <span>{ value.content }</span>
                    </li>
          }
        }
      })
      return rightList;
  }
  render() {
    return (
      <div className="rightList">
            <ul className="detail">
                {this.renderRightList()}
            </ul>
      </div>
      );
  }
}

