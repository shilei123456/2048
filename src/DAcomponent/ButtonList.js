import React, { Component } from 'react';
import {Button, Menu, Dropdown, Icon,Input } from 'antd';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
import './ButtonList.css';
import {fetchSeach} from '../actions/index.js';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">3rd menu item</a>
    </Menu.Item>
  </Menu>
);
const Search = Input.Search;
class ButtonList extends Component{  
    render(){
        const { Actions } = this.props;
        return(
            <div className="main">
                <div className="Button-left">
                    <Button>汇总</Button>
                    <Button>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className="Button-right">
                   <Dropdown overlay={menu} className="drop">
                        <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                        </a>
                   </Dropdown>
                   <Search
                    placeholder="input search text"
                    enterButton="搜索"
                    className="search"
                    onSearch={value => Actions.fetchSeach(value)}
                    />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
  const {DAmessageTOP,DAmessage} = state;
  return {DAmessageTOP,DAmessage};
}

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)