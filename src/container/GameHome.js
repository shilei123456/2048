import React, { Component } from 'react';
import Childcomponent from '../Gamecomponent/main.js';
 export default class GameHome extends Component{ 
    render(){    
        return(
            <div>
               <Childcomponent />
            </div>
        );
    }
}