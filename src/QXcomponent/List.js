import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import './List.css';
 export default class List extends Component{ 
    render(){    
        return(
           <div>
            <Row className="row">
                <Col className="col" span={16}>点评作业：拥有个人点评页，可以为学生作业进行点评</Col>
                <Col className="col" span={8}><Button onClick={this.props.handleShow}>权限管理</Button></Col>
            </Row>
            <Row className="row">
                <Col className="col" span={16}>带课老师：拥有审核点评老师点评内容的权限，包括撤回点评，自行点评</Col>
                <Col className="col" span={8}><Button>权限管理</Button></Col>
            </Row>
        </div>
        );
    }
}