import React, { Component } from 'react';
import { Carousel } from 'antd';
import './picture.css'
export default class Picture extends Component{
 render(){
     const {newdata} = this.props;
    return (
        <div>
            <Carousel>
                <div><img src="http://mpic.tiankong.com/d27/2ba/d272bae826029cfd2f26c2608f768e21/640.jpg@!670w"/></div>
                <div><img src="http://img2.ph.126.net/leDmdyFFd3bjFfKZLsCuuQ==/6619499803862780714.jpg"/></div>
                <div><img src="http://img1.ph.126.net/7eeUbLMItwL0BZIhGGx6qw==/6619091885048878078.jpg"/></div>
                <div><img src="http://img2.ph.126.net/-5NdRyonFPUOae65NcVZcA==/6619284299583736832.jpg"/></div>
                <div><img src="http://img1.ph.126.net/yhx7avgzLfrGEm1n1UM1UQ==/6608924701027191826.jpg"/></div>
            </Carousel>
        </div>
    )
}
}


