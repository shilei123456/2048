import React, { Component } from 'react';
import Search from '../DPcomponent/Search';
import Tabs from '../DPcomponent/Tabs';
export default class DianPing extends Component{ 
    render(){    
        return(
            <div>
               <Search />
               <Tabs />
            </div>
        );
    }
}