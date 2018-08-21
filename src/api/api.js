import React, { Component } from 'react';
import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';
export  function fatchUser( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_USER_REQ
    });
    axios({
         method:"POST", 
         headers:{'Content-type':'application/x-www-form-urlencoded',}, 
         url:'http://xly-wkop.xiaoniangao.cn/getUserInfo', 
         data:{
             mid:1,
         }, 
    }).then(res => {
        next({
            type:ActionTypes.FETCH_GITHUB_USER_SUC,
            data: res.data.data
        });
    }).catch(function(error){
        console.log(error);
        next({
            type:ActionTypes.FETCH_GITHUB_USER_FAI
        })
    }); 
}

export  function fatchLesson( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_TABLE_REQ
    });
    axios({
         method:"POST", 
         headers:{'Content-type':'application/x-www-form-urlencoded',}, 
         url:'http://xly-wkop.xiaoniangao.cn/getLessonInfo', 
         data:{
             mid:330900002,
         }, 
    }).then(res => {
        next({
            type:ActionTypes.FETCH_LESSON_INFO_SUC,
            data: res.data.data
        });
    }).catch(function(error){
        console.log(error);
        next({
            type:ActionTypes.FETCH_GITHUB_TABLE_FAI
        })
    }); 
}

export  function fatchdDangAn( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_DANGAN_REQ
    });
    axios({
         method:"POST", 
         headers:{'Content-type':'application/x-www-form-urlencoded',}, 
         url:'http://xly-wkop.xiaoniangao.cn/getStudentList', 
         data:{
             mid:1,
         }, 
    }).then(res => {
        console.log(res);
        next({
            type:ActionTypes.FETCH_STUDENT_INFO_SUC,
            data: res.data.data
        });
    }).catch(function(error){
        console.log(error);
        next({
            type:ActionTypes.FETCH_GITHUB_DANGAN_FAI
        })
    }); 
}

export  function fatchdShangke( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_SHANGKE_REQ
    });
    axios({
         method:"POST", 
         headers:{'Content-type':'application/x-www-form-urlencoded',}, 
         url:'http://xly-wkop.xiaoniangao.cn/getClassInfo', 
         data:{
             id:98676,
         }, 
    }).then(res => {
        next({
            type:ActionTypes.FETCH_LEARN_INFO_SUC,
            data: res.data.data
        });
    }).catch(function(error){
        console.log(error);
        next({
            type:ActionTypes.FETCH_GITHUB_SHANGKE_FAI
        })
    }); 
}