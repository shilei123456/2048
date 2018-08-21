
import * as ActionTypes from '../const/ActionTypes';
import { normalize } from 'normalizr'
import * as schemes from '../schemes'
export function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USER_INFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_LESSON_INFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchStudentInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_STUDENT_INFO,
        endpoint: '/getStudentList',
        params: {
          id
        }
      }
    }
}

export function fetchLearnInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LEARN_INFO,
        endpoint: '/getClassInfo',
        params: {
            id
        }
      }
    }
}

export function fetchSatifyInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_SATIFY_INFO,
      endpoint: '/getSatisfiledList',
      params: {
        mid
      }
    }
  }
}

export function fetchSeach(value){
  return {
    type: ActionTypes.FETCH_GITHUB_SEACH_FAI,
    value
  }
}
export function fetchLeftSeach(value){
  return {
    type:ActionTypes.FETCH_GITHUB_LEFTSEACH_FAI,
    value
  }
}
export function fetchDelete(value,xiabiao){
  return {
    type:ActionTypes.FETCH_GITHUB_DELETE_FAI,
    value,
    xiabiao
  }
}
export function fetchInitCureInfo(value1,value2,v1,v2,value3,value4){
   return {
     type: ActionTypes.INIT_GAME,
     value1,
     value2,
     v1,
     v2,
     value3,
     value4
   }
}
export function fetchRestartCureInfo(value1,value2,v1,v2,value3,value4,zero){
 return {
     type: ActionTypes.RESTART_GAME,
     value1,
     value2,
     v1,
     v2,
     value3,
     value4,
     zero
   }
}
export function fetchUpCureInfo(value1,value2,num){
  return {
    type : ActionTypes.UP_GAME,
    value1,
    value2,
    num
  }
}
export function fetchDownCureInfo(value1,value2,num){
  return {
    type : ActionTypes.DOWN_GAME,
    value1,
    value2,
    num
  }
}
export function fetchLeftCureInfo(value1,value2,num){
  return {
    type : ActionTypes.LEFT_GAME,
    value1,
    value2,
    num
  }
}
export function fetchRightCureInfo(value1,value2,num){
  return {
    type : ActionTypes.RIGHT_GAME,
    value1,
    value2,
    num
  }
}
export function fetchDianPingInfo(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoMyHistory(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_MyHistory_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoAllWei(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoAllYi(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export default function handleChangeTuiHui(id){
  return {
    type:ActionTypes.CHANGE_REJECT_STATUS,
    id,
  }
}
export  function fetchQuanXianInfo(text){
  return {
    type:"QUANXIAN_ADD_ITEM",
    text
  }
}
export  function fetchIndexInfo(name,text){
  return {
    type:"CHANGE_INDEX",
    name,
    text
  }
}