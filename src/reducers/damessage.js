import {FETCH_STUDENT_INFO_SUC,FETCH_GITHUB_SEACH_FAI} from '../const/ActionTypes.js'
const initialMessage={
  msg:[]
}
export default function DAmessage(state=initialMessage,action){
  switch(action.type){
        case FETCH_STUDENT_INFO_SUC:
         console.log(action);
            let msg = action.response.data.map((row,i)=>({...row,student:{mid:row.mid,nick:row.nick}}));
            return Object.assign({...state}, { msg })
            break;
        case FETCH_GITHUB_SEACH_FAI:
            let newMsg=[];
            for(let i=0;i<state.msg.length;i++){
               if(state.msg[i].mid==action.value){
                 newMsg.push(state.msg[i]);
               }
            }
            const newState = { ...state };
            newState.msg = newMsg;
            return newState;
        default:
        return state;
        }
}