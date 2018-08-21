import React, { Component } from 'react';
import ButtonList from '../DAcomponent/ButtonList.js';
import Table from '../DAcomponent/Table.js';
 export default class DangAn extends Component{ 
    render(){    
        return(
            <div>
               <ButtonList />
               <Table />
            </div>
        );
    }
}