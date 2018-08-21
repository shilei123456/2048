import { combineReducers } from 'redux'
import * as ActionTypes from '../const/ActionTypes.js'

function author (state = {},action){
   switch(action.type){
     case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
       const entities = action.response.entities
       return {
       ...state,
       ...entities.author
       }
       }
      default:
      return state;
   }
}

function classes (state = {},action){
  switch(action.type){
    // case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
    //   const entities =  action.response.entities
    //   return {
    //     ...state,
    //     ...entities.classes
    //   };
    // }
    // case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
    //   const { history, current } = action.response;
    //   return {
    //     ...state,
    //     ...history.entities.classes,
    //     ...current.entities.classes
    //   };
    // }
   case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities = action.response.entities;
      return {
        ...state,
        ...entities.classes
      };
    }
    default:
      return state;
  }
}

function teacher (state = {},action){
  switch(action.type){
    // case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
    //   const entities =  action.response.entities
    //   return {
    //     ...state,
    //     ...entities.teacher
    //   };
    // }
    // case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
    //   const { history, current } = action.response;
    //   return {
    //     ...state,
    //     ...history.entities.teacher,
    //     ...current.entities.teacher
    //   };
    // }
     case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities = action.response.entities;
      return {
        ...state,
        ...entities.teacher
      };
    }

    default:
      return state;
  }
}

function comments (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.comments
      };      
    }
    
    case ActionTypes.CHANGE_REJECT_STATUS:{ 
      const newState =  {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: 'reject',
          reason: '评价太简单'
        }
      }
      return newState
    }
    default:
      return state;
  }
}

function homeworkList (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities =  action.response.entities;
      return {
        ...state,
        ...entities.homeworkList
      };
    }
    default:
      return state;
  }
}
// function students(state = {}, action){
//   switch(action.type){
//     case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
//       const { entities } = action.response;
//       return {
//         ...state,
//         ...entities.students
//       }
//     }
//     default:
//       return state;
//   }
// }



// function getChild(data) {
//   return (
//     <TreeNode title={data.title} key="0-0-0-0-0" />
//   )
// }

// function getChildens(data) {
//   if(Array.isArray(data.child)) {
//     return data.child.map(item => {
//       if(Array.isArray(item.child)) {
//         return getChildens(item)
//       } else {
//         return <TreeNode title={item.title} key="0-0-0-0-0" />
//       }
//     })
//   } else {
//     return  <TreeNode title={data.title} key="0-0-0-0-0" />
//   }
// }

const _data = {
      
        id: 101,
        title: '所有部门',
        child: [{
          id: 1001,
          title: '爱奇迪集团',
          child:[{
            id: 10001,
            title: '广州分公司',
            child:[{
              id: 100001,
              title: '总经办',
            },{
              id: 100002,
              title: '财务部',
            },{
              id: 100003,
              title: '工程部'
            },{
              id: 100004,
              title: '产品研发部',
              child:[{
                id: 1000001,
                title: '开发一组'
              },{
                id: 1000002,
                title: '开发二组'
              },{
                id: 1000003,
                title: '测试组'
              }]
            }]
          }]
       }],
  }
 function treeData(state=_data,action){
   return state;
 }
export default combineReducers({
  author,
  classes,
  teacher,
  comments,
  // satisfiled,
  // students,
  // lessons,
  homeworkList,
  treeData
});