import {FETCH_LESSON_INFO_SUC} from '../const/ActionTypes.js'
import React, { Component } from 'react';
import { Icon } from 'antd';
import "../component/Table.css";
const img1=require('../source/人.png');
const initialMessage={
    LessonsList:[],
    historyLessonsList:[]     
}
export default function MessageList(state=initialMessage,action){
  switch(action.type){
    case FETCH_LESSON_INFO_SUC:
      let LessonsList = action.response.data.currentLessonsList;
      let historyLessonsList = action.response.data.historyLessonsList;
      return Object.assign({...state},{ LessonsList, historyLessonsList })
    default:
    return state;
  }
}