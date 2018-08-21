import {QUANXIAN_ADD_ITEM,CHANGE_INDEX,FETCH_GITHUB_SEACH_FAI,FETCH_GITHUB_LEFTSEACH_FAI,FETCH_GITHUB_DELETE_FAI} from '../const/ActionTypes.js'
const initialMessage={
  initialState:[{
             name:"白帆",
             mid:"2675119691"
         },{
             name:"白帆",
             mid:"2675119692" 
         },{
             name:"白帆",
             mid:"2675119693"
         },{
             name:"王鹏",
             mid:"2675119694"
         },{
             name:"王鹏",
             mid:"2675119695" 
         },{
             name:"王鹏",
             mid:"2675119696"
         }],
   initialLeftState:[{
             name:"白帆",
             mid:"2675119691"
         },{
             name:"王鹏",
             mid:"2675119694"
         },{
             name:"王鹏",
             mid:"2675119695" 
         }]
}
export default function QXmessage(state=initialMessage,action){
  switch(action.type){
        case QUANXIAN_ADD_ITEM:
            return state;

        case CHANGE_INDEX:
             const newMessage = state.initialLeftState.slice();
                newMessage.unshift({
                    name:action.name,
                    mid:action.text
                });
            const newState = { ...state };
            newState.initialLeftState = newMessage;
            return newState;

         case FETCH_GITHUB_SEACH_FAI:
            let newMsg=[];
            for(let i=0;i<state.initialState.length;i++){
               if(state.initialState[i].mid==action.value){
                 newMsg.push(state.initialState[i]);
               }
            }
            const newState1 = { ...state };
            newState1.initialState = newMsg;
            return newState1;

         case FETCH_GITHUB_LEFTSEACH_FAI:
         let newLeftMsg=[];
         for(let i=0;i<state.initialLeftState.length;i++){
             if(state.initialLeftState[i].mid==action.value){
                 newLeftMsg.push(state.initialLeftState[i]);
             }
         }
         const newstate2={...state};
         newstate2.initialLeftState=newLeftMsg;
         return newstate2;
         
          case FETCH_GITHUB_DELETE_FAI:
             const Message = state.initialLeftState.slice();
               for(let i=0;i<state.initialLeftState.length;i++){
               if(state.initialLeftState[i].mid==action.value){
                 Message.splice(action.xiabiao,1);
               }
            }
            const newState3 = { ...state };
            newState3.initialLeftState = Message;
            return newState3;
        default:
        return state;
        }
}