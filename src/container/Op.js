import React, { Component } from 'react';
import TOPBAR from '../component/TopBar.js';
import NAVBAR from '../component/NavBar.js';
 export default class Op extends Component{ 
    render(){    
        return(
            <div>
               <TOPBAR/>
               <NAVBAR/>   
            </div>
            
        );
   
    }
}