import {FETCH_SATIFY_INFO_SUC} from '../const/ActionTypes.js'
import React, { Component } from 'react';
import "../component/Table.css";
const initialMessage={
    SatifyLists:[]    
}
export default function SatifyList(state=initialMessage,action){
  switch(action.type){
    case FETCH_SATIFY_INFO_SUC:
      let SatifyLists = action.response.data;
      return Object.assign({...state},{ SatifyLists })
    default:
    return state;
  }
}