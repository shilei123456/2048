import {FETCH_LEARN_INFO_SUC} from '../const/ActionTypes.js'
const initialMessage={
  msg:[],
  top:{}
}
export default function SKmessage(state=initialMessage,action){
  switch(action.type){
    
        case FETCH_LEARN_INFO_SUC:
          console.log(action.data);
            let msg = action.response.data.list;
            let top= action.response.data["basic_info"]
            return Object.assign({...state}, { msg,top })
        default:
        return state;
        }
}