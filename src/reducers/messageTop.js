import {FETCH_GITHUB_USER_SUC} from '../const/ActionTypes.js'
const initialMessage={
       msg:[],
}
export default function MessageTop(state=initialMessage,action){
  switch(action.type){
        case FETCH_GITHUB_USER_SUC:
            let msg = action.data;
            return Object.assign({...state}, { msg })
        default:
        return state;
        }
}